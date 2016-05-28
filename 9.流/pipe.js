var fs=require("fs");
var rs=fs.createReadStream("./1.txt");
var ws=fs.createWriteStream("./3.txt");
//可读流里面的方法
rs.pipe(ws);


