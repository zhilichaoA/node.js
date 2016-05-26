var EventEmitter = require('events');
function Girl(){
    
}
var util = require('util');
util.inherits(Girl,EventEmitter);
var g = new Girl();
function eat(who){
    console.log(who+"吃了很多饭");
}
function drink(who){
    console.log(who+"喝了好多水");
}
//1.方法 和 addListener方法是一样的
/*g.on('我饿了',eat);
g.addListener('我饿了',eat);
g.addListener('我渴了',drink);
//移出一次
//g.removeListener('我饿了',eat);
//全部移出掉
g.removeAllListeners('我饿了');
g.emit('我饿了',"珠峰");
g.emit('我渴了',"珠峰");*/

//当前事件名字对应的事件池 装载我们所有的方法
//设置最大监听数量
//g.setMaxListeners(1);
g.on('我饿了',eat);
g.on('我饿了',eat);
//查看当前的监听数量 listenerCount
console.log(g.listenerCount('我饿了',eat));
g.emit('我饿了',"珠峰");
//console.trace();

