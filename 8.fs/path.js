var  path=require("path");

//1.join拼接路径
//var str="a"+"/"+""
//win 系统下
//C:\Users\建宙\Desktop\react-book
//linux系统下
///bin#
//console.log(path.join("c:","//b","c"));
//2.获取文件的扩展名
//console.log(path.extname("1.txt"));
//console.log(path.extname("C:/Users/建宙/Desktop/桌面/node注册学习.docx"));
//3.获取文件的名字 如果是文件夹返回文件夹的名字 如果是文件返回文件的名字带扩展名
//console.log(path.basename("C:/Users/建宙/Desktop/桌面/node注册学习.docx"))
//console.log(path.basename("C:/Users/建宙"))
//如何去掉扩展名
//console.log(path.basename("C:/Users/建宙/Desktop/桌面/node注册学习.docx",".docx"))
//console.log(path.basename("C:/Users/node注册学习.docx",path.extname("C:/Users/node注册学习.docx")))
// 4 路径分割符 win ;  linux :
//console.log(path.delimiter);
//5 获取目录分隔符 win \  linux/
//console.log(path.sep);

//6 将非标准路径字符串转换为标准路径字符串
//(1).. 和  .  ..上一级目录  .当前目录
//console.log(path.normalize("a/b/../c/./e"));
//(2)将多个斜杠 转换成一个斜杠
//console.log(path.normalize("a/b///..///c/./e"));
//(3)将反斜杠 转换成正斜杠
//console.log(path.normalize("a/b//"));
//(4)如果结尾是斜杠 则保留着个斜杠
//console.log(path.normalize("a/b//"));

//7.获取绝对路径
//(1)以应用程序的个根目录为起点
//console.log(path.resolve(""));
//(2)如果参数是普通字符串 当做下一级目录
//console.log(path.resolve("a"));
//(3)如果参数是.. 表示上一级目录
//console.log(path.resolve("..","1.第一周作业.md"));
//(4)如果是以斜杠开头/  直接定位到根目录
//console.log(path.resolve("/a","1.第一周作业.md"));