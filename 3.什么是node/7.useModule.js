//去使用这个模块
var Fn = require('./6.exports.js');
console.log(Fn);
var f = new Fn();
f.eat = function () {
    console.log(1);
};
//拿到的是引用数据类型，他有一个查找的过程，先找自家的再找原型上的，找到了修改掉
f.home[0] = 100;
//在创建对象的时候已经被改变了
var e = new Fn();
console.log(e.home);
//f.__proto__.eat('zfpx');