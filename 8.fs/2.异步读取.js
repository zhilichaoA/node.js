var fs =require('fs');
var EventEmitter = require('events');
var event = new EventEmitter();
var person = {};
var index = 0;
//异步可以用计数器的方式
fs.readFile('./name.txt','utf8', function (err,data) {
    index++;
    person.name = data;
    read();
});
fs.readFile('./age.txt','utf8', function (err,data) {
    index++;
    person.age = data;
    read();
});
function read(){
    if(index==2){
        console.log(person);
    }
}
