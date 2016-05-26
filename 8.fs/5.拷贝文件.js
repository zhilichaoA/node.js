/*var fs=require("fs");
function copy(source,target){
    //异步的方法是通过回调函数里的参数来操作的
    fs.readFile(source,'utf8', function (err,data) {
        if(!err)
           fs.writeFile(target,data);
    });
}
copy('./age1.txt','./age2.txt');*/

//fs.mkdirSync()
var fs=require("fs");
//不能直接跳着创建d 必须abc都得存在
//创建目录
fs.mkdir('a/b/c/d', function () {
    console.log("创建了a");
});
//删除目录
fs.rmdir('e', function () {
    console.log("创建了a");
});
//判断文件/文件夹是否存在
fs.exists('./a', function (flag) {
    console.log(flag);
});
/*
* atime  访问的时间
* mtime  修改时间
* ctime  不改变时间是不会变的
* birthtime 出生时间
*
* */
var stat = fs.statSync('./age.txt');
console.log(stat);

fs.watchFile('./age.txt',function () {
    console.log(1);
});
