var fs=require("fs");

var ws=fs.createWriteStream("write.txt",{
    flags:"w", //  如果没有设置值的话 他默认是w 每次写入前都要进行清空  a追加数据
    //encoding:"",//设置编码格式
    highWaterMark:2,//最高水位线  默认值是16k 当write()
});
//向文件写入数据 write（data,[encoding],[callback]）
//data数据的数据只能是字符串 或者是buffer 否则就会报错
//write方法可以调多次
//第一种写入方式
//有返回值  返回值是true写到了文件里   false
//var result=ws.write("123","",function(){
//    console.log(arguments)
//});
//console.log(result);
//ws.write("123","",function(){
//    console.log(arguments)
//});
//向文件写入数据  1.把流关闭了   2.迫使缓存区的数据 马上写入到文件内
//ws.end("xx","utf8",function(){
//    console.log("写入完成！")
//})
//缓存区里的数据已经全部 写入文件以后 会触发drain时间
//ws.on("drain",function(){
//})

//

var max=10;
var i=0;
function write(){
    var result=true;
        while(result &&  i<max){
            console.log("写入的数据是："+i)
            result=ws.write((i).toString());
            i++;
            if(!result){
                console.log("缓存已满请稍后写入数据");
            }
    }
}
ws.on("drain",function(){
    console.log("缓存数据已经清空。可以继续写入");
    write();
})
write()




