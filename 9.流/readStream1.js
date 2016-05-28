//流 现实生活中  我们可以把流理解为 液体从一个地方到另一个地方
//node  我们可以理解为  把数据从一个地方转移到另一个地方

var fs=require("fs")

//可读流
//创建一个可读流 创建以后并不会马上读取数据
var rd=fs.createReadStream("./read.txt",{
    //第一种给流设置编码的方式
    encoding:"utf8", //默认值是null  如果是null 返回的是buffer  如果设置了其他编码返回值就是一个字符串类型
    flags:"r",//打开文件以后要干什么 r等价于read w 等价于write   a追加数据
    //start:3, //用整数表示文件开始读取的字节数的索引位置
    //end:5, //end 用整数表示文件结束读取的字节数的索引位置(包括end位置)
    highWaterMark:1, //最高水位线 默认是64k
    /*
    * 有一个文件 640k
    * 1. 先从文件里读取64k数据  再发射emit（data）
    * 。。。
    * 10. 先从文件里读取64k数据  再发射emit（data）
     */

})
//第二种设置编码的方式
//rd.setEncoding("utf8")
//只有当注册 data事件以后才会 开始读取数据 emit（data）
//rd.on("data",function(data){
//    console.log(data);
//})
//当数据读取完毕 触发end事件
//rd.on("end",function(){
//    console.log("文件读完了")
//})
//当读取报错时 触发error事件 没有注册这个事件  程序会直接挂掉
//rd.on("error",function(err){
//    console.log("出错了！错误原因："+err)
//})

//暂停数据读取  暂停data事件的触发
//rd.pause()
//恢复数据读取   恢复data事件的触发
//rd.resume();

var i=0;
rd.on("data",function(data){
    console.log("读到的数据："+data);
    i++;
    if(i==5){
        console.log("累死宝宝了。。休息一会3秒钟在开始读吧！！");
        rd.pause();
        setTimeout(function(){
            rd.resume();
        },3000)
    }
})












