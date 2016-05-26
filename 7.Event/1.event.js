/*
* 观察者  发布订阅
* */
function Event(){
    this._events = {};
}
//监听事件
/**
 * @param event 事件的名字
 * @param callback 回掉函数
 */
Event.prototype.on = function (eventName,callback) {
    //1.先取出对象里对应的名字看看是否有事件
    //this._events[eventName]装着我们所有的事件
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback];
    }
};
Event.prototype.once = function (eventName,callback) {
    //触发一次
};
Event.prototype.off = function(eventName,callback){
    //off方法将数组里的函数等于callback移出掉
    var cur = this._events[eventName];
    //filter数组里的过滤方法
    //返回一个过滤后的新的数组
    this._events[eventName] =cur.filter(function (item) {
        return callback!=item;
    });
};
//发射事件
Event.prototype.emit = function (eventName) {
    //获取除了第一个以外的参数
    var args = Array.prototype.slice.call(arguments,1);
    var cur = this._events[eventName];
    var that = this;
    if(cur){ //[eat,eat]
        //如果存在我们就执行数组里的内容
        cur.forEach(function (item) {//item代表的每一个callback
            //执行时传递的参数
            item.apply(that,args);
        });
    }
};
var event = new Event();
function eat(who){
    console.log(who+"吃饭");
}
event.once("我饿了",eat);
event.emit("我饿了","珠峰");
event.emit("我饿了","珠峰");