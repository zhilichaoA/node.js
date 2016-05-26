var fs =require('fs');
var EventEmitter = require('events');
var event = new EventEmitter();
var person = {};
var index = 0;
//先订阅on方法
event.on('触发读取成功',read);
//异步可以用计数器的方式
fs.readFile('./name.txt','utf8', function (err,data) {
    person.name = data;
    event.emit('触发读取成功');
});
fs.readFile('./age.txt','utf8', function (err,data) {
    person.age = data;
    event.emit('触发读取成功');
});
function read(){
    if(person.name&&person.age)
        console.log(person);
}
//两种方式 1.事件的方式  2.计数器的方式
