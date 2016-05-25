function read(callback){
    setTimeout(function () {
        callback();
    }, 5000);
}
//后续的逻辑
function write(){
    console.log("写入");
}
read(write);//将后续的逻辑当作参数传递进去；

//服务员可以是异步的
//异步 同步 针对主线程   阻塞 非阻塞 针对内核
//5个人同时吃一碗饭 异步
//一个一个吃 同步
