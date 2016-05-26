//有两个buffer 把这两个buffer拷贝到newBuffer里
var buf1 = new Buffer([1,2,3]);
var buf2 = new Buffer([4,5,6]);
var newBuffer  = new Buffer(6);

buf1.copy(newBuffer,0,0,3);
buf2.copy(newBuffer,3,0,3);
console.log(newBuffer);
//targetBuffer 目标buffer
//targetstart 目标的开始
//sourcestart 原buffer的开始读取的位置
//sourceend 原buffer的结束的位置
var buf1=new Buffer('珠峰');
var buf2=new Buffer('培训');
/*
var newBuf=new Buffer(12);
buf1.copy(newBuf,0);
buf2.copy(newBuf,6);
console.log(newBuf.toString());*/
console.log(Buffer.concat([buf1,buf2]).toString());

//判断length是否传递
var buf1=new Buffer('珠峰');
var buf2=new Buffer('培训');
Buffer.concat1= function (list,len) {

    return newBuffer;
};
console.log(Buffer.concat1([buf1,buf2]).toString());


