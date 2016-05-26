//柯理化 预制参数
function say(name,content){
    console.log(name,content);
}
//1.bind 将珠峰内置进去
/*var newSay = say.bind(null,'珠峰');
newSay('node开课了');
newSay('js开课了');
newSay('css开课了');*/
/*say('珠峰','node开课了');
say('珠峰','js开课了');
say('珠峰','css开课了');*/
function newSay(){
    //将我们的参数和我们的预制内容拼接起来
say.apply(null,["珠峰"].concat(Array.prototype.slice.call(arguments)));
}
newSay('node开课了');
newSay('css开课了');


function eat(times,callback){
    //times是预制的
    var index = 0;
    return function () {
        index++;
        if(index==times){
            callback();
        }
    }
}
var newEat = eat(5, function () {
    console.log('吃完了');
});
newEat();
newEat();
newEat();
newEat();
newEat();






