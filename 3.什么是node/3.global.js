//console.log(this); //后台的this不是global；
//exports.name = '1';
//console.log(this);
var n = 100;
//console.log(global.n);
//console.log(global.global.global);
/*
*    clearImmediate: [Function],
     clearInterval: [Function],
     clearTimeout: [Function],
     setImmediate: [Function],
     setInterval: [Function],
     setTimeout: [Function],
     console: [Getter] }
* */
/*console.log('log');
console.error('error');
console.warn('warn');
console.info('info');*/
//顺序不一致
//计算时间
/*console.time('eat');
setTimeout(function () {
    //计算异步代码的时间
    console.timeEnd('eat');
}, 2000);*/
//c:\Users\10354_000\Desktop\node二期\3.什么是node\3.global.js 当前的文件的目录
console.log(__filename); //不是global上的属性
console.log(__dirname); //c:\Users\10354_000\Desktop\node二期\3.什么是node


setTimeout(function () {
    console.log(2);
},0);
setImmediate(function () {
    console.log(1);
});
//setImmediate 和 setTimeout都是放在第二个小本上
//区别 setImmediate 是给setTimeout机会的









