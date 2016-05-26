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

var obj = {
    name : 1,
    drink: function () {
        console.log('drink');
    }
};
//showHidden 显示更多隐藏信息
//depth 深度
//colors 增加颜色
console.log(util.inspect(obj,{showHidden:true,depth:1,colors:true}));
//对象定义属性
Object.defineProperty(obj,'age',{
    enumerable:false, //是否枚举
    value:100,        //属性的值
    configurable:false, //是否可配置
    writable:false     //是否可写
});
obj.age = 1000;
//让不可枚举的不显示
console.log(util.inspect(obj,{showHidden:true,depth:1,colors:true}));

//util.inspect();





/*
Child.prototype = new Parent();
var child = new Child();
//会继承私有的
console.log(child.smile);
*/

/*Child.prototype.__proto__ =Parent.prototype;
Object.create()*/

//检测数据类型
console.log(util.isArray([]));
console.log(util.isRegExp(/\d+$/));
console.log(util.isDate(new Date()));
console.log(util.isError(new Error()));


