
var http=require("http");
var url=require("url");
var fs=require("fs");

http.createServer(function(req,res){
    var urlObj=url.parse(req.url,true);
    console.log(urlObj.pathname)
    if(urlObj.pathname=="/")
    {
        fs.createReadStream("./ajax.html").pipe(res);
    }
    else if(urlObj.pathname=="/get"){
        res.end(JSON.stringify(urlObj.query));
    }
    else if(urlObj.pathname=="/post"){
        req.pipe(res);
        //var result="";
        //req.on("data",function(data){
        //    result+=data.toString();
        //})
        //req.on("end",function(){
        //    res.end(result)
        //})
    }
}).listen("8080");