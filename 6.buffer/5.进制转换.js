//把任意进制转换成10进制
/*
* params1 是内容
* params2 告诉是什么进制的
* */
//parseInt('111',2);
console.log(parseInt('111',2)); //2^0+2^1+2^2
console.log(parseInt('11',8));  //9
console.log(parseInt('0xff',16));

//把10进制转换成任意进制
//()把数字转换成对象
//字符串上有自己的toString方法
//console.log("".__proto__.toString == Object.toString);
console.log((3).toString(2));
console.log((9).toString(8));
console.log((17).toString(16));

//base64 把我的数据转换成可见的字符
//原理 utf8中1个汉字是三个字节  3*8 = 24； 二进制
//变成4个字节 每个字节6个 前面填两个0

var buffer = new Buffer("珠");
console.log(buffer);//e7 8f a0
//1.把16进制转换成2进制 先转换10进制
console.log(parseInt('e7',16));
console.log(parseInt('8f',16));
console.log(parseInt('a0',16));
console.log((231).toString(2));
console.log((143).toString(2));
console.log((160).toString(2));
//获得一个汉字的 二进制表示11100111 10001111 10100000
//00111001 00111000 00111110 00100000
//把每一位转换成0-63之间的数 之后在转换成10进制
console.log(parseInt('00111001',2));
console.log(parseInt('00111000',2));
console.log(parseInt('00111110',2));
console.log(parseInt('00100000',2));
//对应的十进制57 56 62 32
//可见字符
var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
str += str.toLocaleLowerCase();
str += '0123456789';
str += '+/';
console.log(str[57]+str[56]+str[62]+str[32]);


/*
* 1.将16进制转换成2进制
* 2.把2进制连起来，分成4节 没个节里六个前面添2个0；
* 3.在取出对应的10进制
* 4.在可见字符里取出来
* */







