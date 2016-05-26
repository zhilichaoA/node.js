var fs = require('fs');
//在调用writeFile时会自动生成写入的文件
//先清空在写入
//异步的方式
/*fs.writeFile('./write.txt','world', function () {
    console.log("写入成功");
});*/
//同步写入
//没有权限 rwx read 4 write是2  execute是1  二爷一直（1）死读书
//chmod 777 -R
fs.writeFileSync('./write.txt','HelloWorld');


