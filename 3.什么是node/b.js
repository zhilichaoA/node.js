/*var a = require('./a.js');
console.log(a);
//require是同步的还是异步的
//require方法是同步的*/
console.log('B开始加载');
var aa = require('./a.js');
exports.a = 1;

console.log('B加载A后');
//解决了循环依赖