var http=require("http");
var url=require("url");
var fs=require("fs");

//创建服务器
var server=http.createServer(function(req,res){
    //处理请求路径
    var urlObj=url.parse(req.url,true);
    //console.log(urlObj.pathname)
    //console.log(urlObj)
    //匹配路由
    if(urlObj.pathname=="/"){
        res.setHeader("Content-Type","text/html;charset=utf8");
        //用fs.readFile方式返回数据
        fs.readFile("./post.html",function(err,data){
            //res.write(data);
            res.end(data);
        })
        //用可读流的方式返回数据
        //fs.createReadStream("./post.html").pipe(res);
    }
    //  /get请求的处理路由
    else if(urlObj.pathname=="/post")
    {
        if(req.method=="GET"){
            console.log(urlObj.query)
            res.setHeader("Content-Type","text/html;charset=utf8")
            res.end(JSON.stringify(urlObj.query))
        }
        else if(req.method=="POST"){
            var result=""
            req.on("data",function(data){
                result+=data.toString();
            })
            req.on("end",function(){
                res.end(result);
            })
        }

    }
})

//本地监听8080端口
server.listen(8080,"127.0.0.1",function(){
    console.log("服务器开起了！");
})