var fs = require('fs');

//导入fs模块

//同步读取 异步读取
//1.是同步读取
var person = {};
person.age = fs.readFileSync('./age.txt',{encoding:'utf8'});
person.name = fs.readFileSync('./name.txt',{encoding:'utf8'});
console.log(person);








