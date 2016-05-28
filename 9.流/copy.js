//1.可读流   2.可写流
//rs data
//判断返回值 ws.write();
//rs.pause()
//注册 drain
//rs.resume()
//注册 end 事件
//ws.endO


var fs=require("fs");

function copy(source,target){
    //判断源文件是否存在
   //console.log(source,fs.existsSync(source));
    if(fs.existsSync(source)){
        //创建可读流 和 可写流
        var rs=fs.createReadStream(source);
        var ws=fs.createWriteStream(target);
        rs.on("data",function(data){
            var result=ws.write(data);
            //如果写入失败就 暂停触发data事件
            if(!result){
                //暂停触发data事件
                rs.pause();
            }
         });
        //当缓存数据全部写入文件以后  恢复data事件的触发
        ws.on("drain",function(){
            rs.resume();
        })
        //当数据全部读取完成  关闭可写流
        rs.on("end",function(){
            ws.end();
        })
    }
    else{
        console.log("拷贝的路径不存在！")
    }
}

copy("./1.jpg","./1.1.jpg")






