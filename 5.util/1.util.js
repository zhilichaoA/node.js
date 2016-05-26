var util = require('util');
function Parent(name){
    this.name = name;
    this.smile = "笑"
}
Parent.prototype.handsome ="英俊的";
function Child(name){
    this.name = name;
}

//util.inherits方法实现继承
/**
 * inherits(子类，父类) 通过Object.create
 */
util.inherits(Child,Parent);
var child = new Child();
console.log(child.smile);







/*
Child.prototype = new Parent();
var child = new Child();
//会继承私有的
console.log(child.smile);
*/

/*Child.prototype.__proto__ =Parent.prototype;
Object.create()*/

