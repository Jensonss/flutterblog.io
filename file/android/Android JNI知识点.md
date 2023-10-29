### JNI介绍

JNI 是 Java Native Interface 的缩写，译为 Java 本地接口，是 Java 与其他语言通信的桥
梁。 所以说白了，有了JNI可以通过Java调用C/C++，当然也可以通过C/C++回调Java，这是JNI两个主要功能。那下面分别从这两方面说下JNI如何实现调用的。

### Java调用C/C++

既然Java要调用C/C++，那么Java如何根据native方法找到对应的so库函数呢？

常规想法就是需要定义一套规则，根据这套规则使能根据native方法找到唯一与之对应的so库函数。

规则如下：根据native方法及相关信息生成固定模式的本地实现函数名称

```
JNIEXPORT 返回值类型 JNICALL Java_类全名_方法名(JNIEnv *env, jobject instance,参数列表){
    
}
```

这套规则我们称为静态注册。

#### 静态注册

静态注册方法有固定的实现步骤：

##### 声明native方法并编译

声明native方法：

```java
public class Tes {
    public native int add(int a, int b);
    public native void getStr_FromJNI();
}
```

Kotlin中使用`external`声明jni方法：

```kotlin
class Tes {
    external fun getStr_FromJNI(): String
    external fun add(a: Int, b: Int): Int
}
```



编译类文件：

`javac Tes.java`

编译完成后生成了Tes.class文件

##### 生成头文件

命令行定位到class文件，执行`javah Tes`生成头文件：

> Android Studio 3.x版本中声明native方法后会飘红，这时候直接fix即可自动创建头文件，免去命令行生成这一步

```c
#include <jni.h>

JNIEXPORT jstring JNICALL
Java_pet_home_main_Tes_getStr_1FromJNI(JNIEnv *env, jobject instance) {
    // TODO
    return (*env)->NewStringUTF(env, returnValue);
}

JNIEXPORT jint JNICALL
Java_pet_home_main_Tes_add(JNIEnv *env, jobject instance, jint a, jint b) {
    // TODO
}
```

注意头文件中方法名，以“Java”开头说明是在 Java 平台中调用 JNI 方法的，后面的 pet_home_main_Tes_getStr_1FromJNI指的是包名＋类名＋方法名的格式，原本在 Java 中应该是以"."
来进行分割，这里却用了"_"，这是因为在 Native 语言中"."有特殊的含义。

还有getStr_1FromJNI中下划线后面多了个1，这是因为 Java 的getStr_FromJNI方法中包含了"_"，

转换成JNI方法后就变成了   "_1"。

##### 编写C代码

C代码直接进行简单的内容返回即可：

```C 
#include <jni.h>

JNIEXPORT jint JNICALL
Java_pet_home_main_Tes_add(JNIEnv *env, jobject instance, jint a, jint b) {
    return a + b;
}

JNIEXPORT jstring JNICALL
Java_pet_home_main_Tes_getStr_1FromJNI(JNIEnv *env, jobject instance) {
    return (*env)->NewStringUTF(env, "this is from jni");
}
```

##### 编译so库并运行

编译so库在运行App时由Studio自动编译完成，不过可以在moudle的gradle文件中配置编译平台：

```groovy
    defaultConfig {
       
		//配置编译平台
        ndk{
            abiFilters "armeabi", "armeabi-v7a","x86"
        }
    }
```

Kotlin加载so库：

```kotlin
    companion object {
        // Used to load the 'native-lib' library on application startup.
        init {
            System.loadLibrary("native-lib")
        }
    }
```

Java加载so库：

```java
static{
    System.loadLibrary("native-lib")
}
```

上面既然说明了有静态注册，那不难想象应该还有动态注册，动态注册又是如何实现的呢？

#### 动态注册

##### Log动态注册

动态注册通过使用JNINativeMethod， 保存了声明函数和实现函数的一一对应关系。  它是一个结构体类型，

该结构体的数组变量`gMethods[]`被注册到VM，这样VM就知道了当调用native方法时该调用哪个实现函数。

以日志类Log为例：

Java层Log类有三个native方法：

```java
    public static native boolean isLoggable(String tag, int level);
 	public static native int println_native(int bufID,int priority, String tag, String msg);
    private static native int logger_entry_max_payload_native();
```

对应的cpp实现`android_util_Log.cpp`：

```c++
/* //device/libs/android_runtime/android_util_Log.cpp
**
** Copyright 2006, The Android Open Source Project
**
** Licensed under the Apache License, Version 2.0 (the "License");
** you may not use this file except in compliance with the License.
** You may obtain a copy of the License at
**
**     http://www.apache.org/licenses/LICENSE-2.0
**
** Unless required by applicable law or agreed to in writing, software
** distributed under the License is distributed on an "AS IS" BASIS,
** WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
** See the License for the specific language governing permissions and
** limitations under the License.
*/

#define LOG_NAMESPACE "log.tag."
#define LOG_TAG "Log_println"

#include <android-base/macros.h>
#include <assert.h>
#include <cutils/properties.h>
#include <log/log.h>               // For LOGGER_ENTRY_MAX_PAYLOAD.
#include <utils/Log.h>
#include <utils/String8.h>

#include "jni.h"
#include "JNIHelp.h"
#include "utils/misc.h"
#include "core_jni_helpers.h"
#include "android_util_Log.h"

namespace android {

struct levels_t {
    jint verbose;
    jint debug;
    jint info;
    jint warn;
    jint error;
    jint assert;
};
static levels_t levels;

static jboolean isLoggable(const char* tag, jint level) {
    return __android_log_is_loggable(level, tag, ANDROID_LOG_INFO);
}

static jboolean android_util_Log_isLoggable(JNIEnv* env, jobject clazz, jstring tag, jint level)
{
    if (tag == NULL) {
        return false;
    }

    const char* chars = env->GetStringUTFChars(tag, NULL);
    if (!chars) {
        return false;
    }

    jboolean result = isLoggable(chars, level);

    env->ReleaseStringUTFChars(tag, chars);
    return result;
}

bool android_util_Log_isVerboseLogEnabled(const char* tag) {
    return isLoggable(tag, levels.verbose);
}

/*
 * In class android.util.Log:
 *  public static native int println_native(int buffer, int priority, String tag, String msg)
 */
static jint android_util_Log_println_native(JNIEnv* env, jobject clazz,
        jint bufID, jint priority, jstring tagObj, jstring msgObj)
{
    const char* tag = NULL;
    const char* msg = NULL;

    if (msgObj == NULL) {
        jniThrowNullPointerException(env, "println needs a message");
        return -1;
    }

    if (bufID < 0 || bufID >= LOG_ID_MAX) {
        jniThrowNullPointerException(env, "bad bufID");
        return -1;
    }

    if (tagObj != NULL)
        tag = env->GetStringUTFChars(tagObj, NULL);
    msg = env->GetStringUTFChars(msgObj, NULL);

    int res = __android_log_buf_write(bufID, (android_LogPriority)priority, tag, msg);

    if (tag != NULL)
        env->ReleaseStringUTFChars(tagObj, tag);
    env->ReleaseStringUTFChars(msgObj, msg);

    return res;
}

/*
 * In class android.util.Log:
 *  private static native int logger_entry_max_payload_native()
 */
static jint android_util_Log_logger_entry_max_payload_native(JNIEnv* env ATTRIBUTE_UNUSED,
                                                             jobject clazz ATTRIBUTE_UNUSED)
{
    return static_cast<jint>(LOGGER_ENTRY_MAX_PAYLOAD);
}

/*
 * JNI registration.
 */
static const JNINativeMethod gMethods[] = {
    /* name, signature, funcPtr */
    { "isLoggable",      "(Ljava/lang/String;I)Z", (void*) android_util_Log_isLoggable },
    { "println_native",  "(IILjava/lang/String;Ljava/lang/String;)I", (void*) android_util_Log_println_native },
    { "logger_entry_max_payload_native",  "()I", (void*) android_util_Log_logger_entry_max_payload_native },
};

int register_android_util_Log(JNIEnv* env)
{
    jclass clazz = FindClassOrDie(env, "android/util/Log");

    levels.verbose = env->GetStaticIntField(clazz, GetStaticFieldIDOrDie(env, clazz, "VERBOSE", "I"));
    levels.debug = env->GetStaticIntField(clazz, GetStaticFieldIDOrDie(env, clazz, "DEBUG", "I"));
    levels.info = env->GetStaticIntField(clazz, GetStaticFieldIDOrDie(env, clazz, "INFO", "I"));
    levels.warn = env->GetStaticIntField(clazz, GetStaticFieldIDOrDie(env, clazz, "WARN", "I"));
    levels.error = env->GetStaticIntField(clazz, GetStaticFieldIDOrDie(env, clazz, "ERROR", "I"));
    levels.assert = env->GetStaticIntField(clazz, GetStaticFieldIDOrDie(env, clazz, "ASSERT", "I"));

    return RegisterMethodsOrDie(env, "android/util/Log", gMethods, NELEM(gMethods));
}

}; // namespace android

```

可以看到Java层打印方法`println_native`对应的cpp方法`android_util_Log_println_native`并没有包含如上面静态注册所提到的`JNIEXPORT`等关键字样，这是因为native方法和实现方法通过`gMethods[]`进行了绑定。

看下JNINativeMethod结构体内容：

```c++
typedef struct {
    const char* name;
    const char* signature;
    void*       fnPtr;
} JNINativeMethod;
```

其中：

`name`为java方法名；

`signature`为java方法签名；

`fnPtr`为本地实现函数指针；

由于Java有函数重载的问题，所以使用方法签名避免方法名相同问题，这里方法签名涉及参数个数、参数类型、返回值。

要知道方法签名，先看下java中类型在jni中对应的别名：

| java      | native        | signature             |
| --------- | ------------- | --------------------- |
| byte      | jbyte         | B                     |
| char      | jchar         | C                     |
| double    | jdouble       | D                     |
| float     | jfloat        | F                     |
| int       | jint          | I                     |
| short     | jshort        | S                     |
| long      | jlong         | J                     |
| boolean   | jboolean      | Z                     |
| void      | void          | V                     |
| 所有对象  | jobject       | L+classname+;         |
| Class     | jclass        | Ljava/lang/Class;     |
| String    | jstring       | Ljava/lang/String;    |
| Throwable | jthrowable    | Ljava/lang/Throwable; |
| Object[]  | jobjectArray  | [L+classname+;        |
| byte[]    | jbyteArray    | [B                    |
| char[]    | jcharArray    | [C                    |
| doubel[]  | jdoubleArray  | [D                    |
| float[]   | jfloatArray   | [F                    |
| int[]     | jintArray     | [I                    |
| short[]   | jshortArray   | [S                    |
| long[]    | jlongArray    | [J                    |
| boolean[] | jbooleanArray | [Z                    |

已经知道`gMethods`保存了函数对应关系，然后在`register_android_util_Log`方法中进行了注册，

追踪源码最终调用了`AndroidRuntime::registerNativeMethods`，将对应函数关系传递给了VM。

那么`register_android_util_Log`是什么时候调用的呢？

其实是在`AndroidRuntime.cpp`的`startReg`方法中调用的，源码如下：

```c++
/*
 * Register android native functions with the VM.
 */
/*static*/ int AndroidRuntime::startReg(JNIEnv* env)
{
    ATRACE_NAME("RegisterAndroidNatives");
    /*
     * This hook causes all future threads created in this process to be
     * attached to the JavaVM.  (This needs to go away in favor of JNI
     * Attach calls.)
     */
    androidSetCreateThreadFunc((android_create_thread_fn) javaCreateThreadEtc);

    ALOGV("--- registering native functions ---\n");

    /*
     * Every "register" function calls one or more things that return
     * a local reference (e.g. FindClass).  Because we haven't really
     * started the VM yet, they're all getting stored in the base frame
     * and never released.  Use Push/Pop to manage the storage.
     */
    env->PushLocalFrame(200);

    if (register_jni_procs(gRegJNI, NELEM(gRegJNI), env) < 0) {
        env->PopLocalFrame(NULL);
        return -1;
    }
    env->PopLocalFrame(NULL);

    //createJavaThread("fubar", quickTest, (void*) "hello");

    return 0;
}
```

上面方法中调用了`register_jni_procs`：

```c++
static int register_jni_procs(const RegJNIRec array[], size_t count, JNIEnv* env)
{
    for (size_t i = 0; i < count; i++) {
        if (array[i].mProc(env) < 0) {
#ifndef NDEBUG
            ALOGD("----------!!! %s failed to load\n", array[i].mName);
#endif
            return -1;
        }
    }
    return 0;
}

```

在`register_jni_procs`方法的`if`语句执行了`register_android_util_Log`函数。

这里简单的一个`if`语句其实还是有挺多逻辑的。

首先看下`register_jni_procs`函数接收的第一个参数`gRegJNI`：

```C++
static const RegJNIRec gRegJNI[] = {
    REG_JNI(register_com_android_internal_os_RuntimeInit),
    REG_JNI(register_com_android_internal_os_ZygoteInit),
    REG_JNI(register_android_os_SystemClock),
    REG_JNI(register_android_util_EventLog),
    REG_JNI(register_android_util_Log),
    REG_JNI(register_android_util_MemoryIntArray),
    REG_JNI(register_android_util_PathParser),
    REG_JNI(register_android_app_admin_SecurityLog),
    REG_JNI(register_android_content_AssetManager),
 	//后面省略很多
};

```

上面可以看到这是一个`RegJNIRec`类型的静态数组，`RegJNIRec`又是什么呢？：

```c++
#ifdef NDEBUG
    #define REG_JNI(name)      { name }
    struct RegJNIRec {
        int (*mProc)(JNIEnv*);
    };
#else
    #define REG_JNI(name)      { name, #name }
    struct RegJNIRec {
        int (*mProc)(JNIEnv*);
        const char* mName;
    };
#endif
```

可以看到`RegJNIRec`只是一个结构体，

结合这两段源码可以看出`REG_JNI(xxx)`，其实就是{xxx}，

所以 REG_JNI(register_android_util_Log),就是{register_android_util_Log},

那么上面源码中的那些xxx是从哪里来的呢？其实在`AndroidRuntime.cpp`有很多类似这样的代码：

```c++
extern int register_android_app_admin_SecurityLog(JNIEnv* env);
extern int register_android_content_AssetManager(JNIEnv* env);
extern int register_android_util_EventLog(JNIEnv* env);
extern int register_android_util_Log(JNIEnv* env);

```

`extern`告诉我们，它这里引用的这些函数诸如：register_android_util_Log等可能定义在另一个源文件中，

这里的`register_android_util_Log`函数就定义在`android_util_Log.cpp`文件中。

结构体RegJNIRec中有这样一个东西`int (*mProc)(JNIEnv*);`

这是一个函数指针：函数变量名为mProc，返回int值，接收一个JNIEnv指针参数。

`gRegJNI[]`其实就是把各个函数指针(诸如register_android_util_Log)赋值给结构体`RegJNIRec`中函数指针变量mProc。

所以在`if`语句中执行`array[i].mProc(env)`其实就是调用了`extern`所引入的各个外部函数。从而达到注册jni函数目的。

##### 自定义JNI动态注册

动态注册相比静态注册灵活性提高了很多，没有那么多条条框框。

但是上面只是讲了系统如何动态注册，那么我们实际开发JNi过程中又该在哪注册呢？毕竟系统启动过程就注册了系统所需JNI，这个过程对我们来说是不可控的。

还记得我们在加载so库时是怎么做的吗？

使用`System.loadLibrary`，这个方法调用完成后系统会回调我们的cpp/c文件中的`JNI_OnLoad`函数：

```c++
jint JNI_OnLoad(JavaVM *vm, void *reserved) {
}

```

所以我们可以在这个方法中进行函数绑定。

首先实现native函数：

```c++
jstring getStr(JNIEnv *env, jobject instance) {
    return (*env)->NewStringUTF(env, "this is from jni");
}
//注意:实现的函数最少要包含JNIEnv *env, jobject instance 这2个参数
jint addResult(JNIEnv *env, jobject instance, jint a, jint b) {
    return a + b;
}

```

然后进行函数绑定：

```c++
static JNINativeMethod gMethods[] = {
        {"getStr_FromJNI", "()Ljava/lang/String;", (void *) getStr},
        {"add",            "(II)I",                (void *) addResult},
};

```

最后在`JNI_OnLoad`中进行函数注册：

```C++
jint JNI_OnLoad(JavaVM *vm, void *reserved) {
    jint result = -1;
    char className[20] = {"pet/home/main/Tes"};
    JNIEnv *env = NULL;
    //通过vm获取env
    if ((*vm)->GetEnv(vm, (void **) &env, JNI_VERSION_1_4) != JNI_OK) {
        return -1;
    }
    //获取class
    jclass clazz = (*env)->FindClass(env, (const char *) className);
    //函数注册
    if ((*env)->RegisterNatives(env, clazz, gMethods, 2) < 0) {
        return -1;
    }
    //一定要返回版本号，否则会出错。
    result = JNI_VERSION_1_4;
    return result;
}
```

Activity进行结果展示：

```kotlin
        val tes = Tes()
        sample_text.text = "${tes.getStr_FromJNI()}#####${tes.add(3, 5)}"
```

##### JNI添加Log打印

在so调试过程中免不了要进行日志打印，但如何在LogCat中显示JNI日志呢？

首先引入`#include<android/log.h>`头文件，

然后进行宏定义：

```c++
#define TAG    "tes.c" // 自定义的LOG的Tag
#define LOGD(...)  __android_log_print(ANDROID_LOG_DEBUG,TAG,__VA_ARGS__)
#define LOGI(...)  __android_log_print(ANDROID_LOG_INFO,TAG,__VA_ARGS__)
#define LOGW(...)  __android_log_print(ANDROID_LOG_WARN,TAG,__VA_ARGS__)
#define LOGE(...)  __android_log_print(ANDROID_LOG_ERROR,TAG,__VA_ARGS__)
```

最后应用Log：

```c++
jint addResult(JNIEnv *env, jobject instance, jint a, jint b) {
    LOGD("a value is %d", a);
    LOGD("b value is %d", b);
    return a + b;
}
```



### C/C++调用Java

代码沿用上面的，可以看到C/C++层的native方法实现中，JNI方法接受的第二个参数是Java对象： jobject， 可以在
JNI中操作这个jobject进而操作Java对象提供的变量和方法 。

#### 获取class

要操作jobject， 就是要访问这个对象并操作它的变量和方法。 JNI提供的类和对象操作函数有很多， 常用的有两个：
FindClass和GetObjectClass， 在C和C++中分别有不同的函数原型。

 C++中的函数原型如下：

```C++
jclass FindClass（const charname） ； //查找类信息
jclass GetObjectClass（jobject obj） ； //返回对象的类

```

C中的函数原型如下：

```C
jclass（FindClass） （JNIEnv， const char） ；
jclass（GetObjectClass） （JNIEnv*， jobject） ； 

```

给Tes类添加一个`calc`函数：

```kotlin
class Tes {
    val NAME = "TES"

    external fun getStr_FromJNI(): String
    external fun add(a: Int, b: Int): Int
    fun calc(a: Int, b: Int): Int {
        return a * b
    }
}

```

根据object实例获取jclass：

```C++
    jclass clzz = (*env)->GetObjectClass(env, instance);

```



#### 获取Java变量

上面已经获取到了jclass，有了class可以通过`GetStaticFieldID`和`GetFieldID`获取静态变量ID和实例变量ID，

获取到FieldID后，再通过`GetStaticxxxField`和`GetxxxField`获取静态变量或实例变量的值：

```C++
    jclass clzz = (*env)->GetObjectClass(env, instance);
	//获取fieldid
  	jfieldID fieldID = (*env)->GetStaticFieldID(env, clzz, "NAME", "Ljava/lang/String;");
	//根据id获取变量值
    jstring nameStr = (jstring) (*env)->GetStaticObjectField(env, clzz, fieldID);
    const char *name = (*env)->GetStringUTFChars(env, nameStr, JNI_FALSE);
    LOGD("Tes name is %s", name);

```



#### 调用Java方法

上面了解到获取变量值前要先获取变量ID，同样调用方法前要先获取方法ID。

通过`GetMethodID`和`GetStaticMethodID`获取实例方法和静态方法ID，

通过`CallxxxMethod`和`CallStaticxxxMethod`调用实例方法和静态方法：

```c++
 	jclass clzz = (*env)->GetObjectClass(env, instance);
	//获取方法id
    jmethodID methID = (*env)->GetMethodID(env, clzz, "calc", "(II)I");
	//调用方法
    jint result = (*env)->CallIntMethod(env, instance, methID, 3, 2);
    LOGD("result value is %d", result);
```



### 关于JNIENV

C++中： JNIEnv就是struct _JNIEnv。 JNIEnv *env等价于 struct  _JNIEnv *env， 

在调用JNI函数的时候， 只需要env-＞FindClass（ JNIEnv*， const char *） ， 就会间接调用JNINativeInterface结构体里定义的函数指针， 而无需首先对env解引用。

C中： JNIEnv就是const struct JNINativeInterface*。JNIEnv *env实际等价于const struct JNINativeInterface **env，
因此要得到JNINativeInterface结构体内的函数指针就必须先对env解引用得到（ *env） ，

 即const struct JNINativeInterface *，这个指针才是真正指向JNINativeInterface结构体的指针，

 然后再通过它调用具体的JNI函数。 因此需要这样调用：（ *env） -＞FindClass（ JNIEnv *， const char *） 。

注意 JNIEnv只在当前线程中有效。 本地方法不能将JNIEnv从一个线程传递到另一个线程中。 

相同的Java线程中对本地方法多次调用时， 传递给该本地方法的JNIEnv是相同的。 但是， 一个本地方法可被不同的Java线程所调用， 因此可以接受不同的JNIEnv。 



### 关于CMakeLists.txt添加目录

Android Studio添加jni支持后会创建CMakeLists.txt文件，

其中会包含你创建的C文件：

```txt
add_library( # Sets the name of the library.
        native-lib
        # Sets the library as a shared library.
        SHARED
        # Provides a relative path to your source file(s).
       src/main/jni/tes.c )
```

但是这里只包含一个文件，如果文件是多文件多目录该怎么办？

可以添加：

```
aux_source_directory( ./src/main/cpp NATIVE_SRC) #参数1为源，参数2为目标

```

如果cpp目录下还要子目录，则继续添加：

```
aux_source_directory( ./src/main/cpp/rtc_base RTC_BASE )

```

将 RTC_BASE 增加到 NATIVE_SRC 中，这样子目录的源文件也加入了编译行列中：

```
list(APPEND NATIVE_SRC ${RTC_BASE})

```

最后修改add_library地方：

```
add_library( # Sets the name of the library.
        native-lib

        # Sets the library as a shared library.
        SHARED

        # Provides a relative path to your source file(s).
        ${NATIVE_SRC}
        )

```