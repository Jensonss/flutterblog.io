# 前言

异常信息如下：**the capture session could not be initiated (you don't have permission to capture on that device)**

在WireShark启动后，选择网卡设备时，出现这个异常。



# 解决

由于是Mac系统，所以直接终端窗口命令行解决：

**sudo chmod 777 /dev/bpf***。