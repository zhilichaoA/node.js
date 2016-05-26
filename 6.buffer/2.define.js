//1.通过长度的方式创建 buffer里的值是16进制的
var buffer = new Buffer(2); //创建的值是随机
//相当于你吃饭的时候走进饭店可能上一家刚吃完，你就坐下了
console.log(buffer);
buffer.fill(17);//手动将桌子擦干净
console.log(buffer);
//2.通过数组的方式创建
var buffer = new Buffer([1,2,3]);
console.log(buffer);
//3.通过字符串方式创建(第二个参数 编码)
var buffer = new Buffer("珠峰培训",'utf8');
console.log(buffer.toString('utf8',0,3));
//包前不包后slice(包括开始的但是不包括结尾);

//字符串具有不变性
var str = '12345';
console.log(str[0]);
str[0] = 100;
console.log(str);
var buffer = new Buffer([1,2,3]);
console.log(buffer[0]);//直接取出来的话 取出来的是10进制
buffer[0] = 2;
console.log(buffer);

//和数组的不同 slice方法给回去的还是以前的
var newBuff = buffer.slice(0,2);
newBuff[0] = 100;
console.log(buffer);
//长度
var str = '123';
console.log(str.length);
var buff = new Buffer("珠峰培训");
console.log(buff.length);
/*
var a = [1,2,3];
var b = a.slice(0,2);
b[0] = 20;
console.log(a);
*/


