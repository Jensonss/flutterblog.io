# 项目代理设置

找到android下的**build.gradle**设置两处**repositories**：

```yaml
        maven { url 'https://maven.aliyun.com/repository/public' }
        maven { url 'https://maven.aliyun.com/repository/google' }
        maven { url 'https://maven.aliyun.com/repository/jcenter' }
        maven { url 'https://maven.aliyun.com/repository/central' }
        maven { url "https://maven.aliyun.com/nexus/content/repositories/jcenter/" }
        maven { url 'https://maven.aliyun.com/nexus/content/groups/public' }
        maven { url "https://download.flutter.io" }
//        maven { url 'https://storage.googleapis.com/download.flutter.io' }
        maven { url 'https://jitpack.io' }
```

# 全局设置

如果运行时出现了如下错误：

```log
Could not download armeabi_v7a_debug-1.0.0-45f6e009110df4f34ec2cf99f63cf73b71b7a420.jar (io.flutter:armeabi_v7a_debug:1.0.0-45f6e009110df4f34ec2cf99f63cf73b71b7a420)
 > Could not get resource 'https://storage.googleapis.com/download.flutter.io/io/flutter/armeabi_v7a_debug/1.0.0-45f6e009110df4f34ec2cf99f63cf73b71b7a420/armeabi_v7a_debug-1.0.0-45f6e009110df4f34ec2cf99f63cf73b71b7a420.jar'.
```

找到**flutter sdk目录下的**几处地方：

```yaml
   flutter/packages/flutter_tools/gradle/resolve_dependencies.gradle
   flutter/packages/flutter_tools/gradle/aar_init_script.gradle
   flutter/packages/flutter_tools/gradle/flutter.gradle
```

找到`https://storage.googleapis.com/download.flutter.io`

替换为`https://download.flutter.io`。