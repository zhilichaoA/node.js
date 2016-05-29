var http=require("http");
var url=require("url");
var fs=require("fs");
var mime=require("mime")

//Error: listen EADDRINUSE :::8080

var server=http.createServer(function(req,res){
    var obj=url.parse(req.url,true);

   // console.log(mime.lookup(obj.pathname));
    if(obj.pathname=="/"){
        res.setHeader("Content-Type",mime.lookup("./index.html")+";charset=utf8")
        fs.readFile("./index.html",function(err,data){
            console.log(data)
            res.end(data);
        });
        //fs.createReadStream("./index.html").pipe(res)
    }
    else if(obj.pathname=="/index.css"){
        res.setHeader("Content-Type",mime.lookup(obj.pathname)+";charset=utf8")
        fs.createReadStream("./index.css").pipe(res)
    }
    else if(obj.pathname=="/1.jpg"){
        res.setHeader("Content-Type",mime.lookup(obj.pathname)+";charset=utf8")
        fs.createReadStream("./1.jpg").pipe(res);
    }
    else if(obj.pathname=="/index.js"){
        res.setHeader("Content-Type",mime.lookup(obj.pathname)+";charset=utf8")
        fs.createReadStream("./index.js").pipe(res);
    }
    else if(obj.pathname=="/ajax"){
        res.end(new Date().toLocaleTimeString());
    }
});


server.listen(8080)