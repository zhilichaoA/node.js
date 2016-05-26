/*
(function (exports,module,require,__dirname,__filename) {
    1.让我们的exports 等于module.exports
    exports =module.exports ={}
    2.我们改变了exports的指向，但是module.exports没有改变

    return module.exports
})*/

function Fn(){
    console.log(1);
}
Fn.prototype.eat = function (who) {
    console.log(who+'吃');
};
Fn.prototype.drink = function (who) {
    console.log(who+'喝');
};
Fn.prototype.home = [1,2,3];
//直接导出一个FN
//最后返回的是module.exports
module.exports  = Fn;
//返回引用数据类型，用module.exports;

