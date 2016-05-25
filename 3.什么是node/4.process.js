console.log(global.process);
//process.cwd(); current working directory
console.log(process.cwd());
//process.chdir(); change directory;
process.chdir('..');
console.log(process.cwd()); //可以被chdir
console.log(__dirname);//不会被chdir
//memoryUsage
//{ rss: 19013632, heapTotal: 10505040, heapUsed: 5278728 }
/*var arr = [];
for(;true;){
    arr.push({});
    console.log(process.memoryUsage());
}*/
//放到第一个小本上的最下面(不给setTimeout机会)
/*process.nextTick(function () {
    console.log(2);
    process.nextTick(function () {
        console.log(3);
    });
});*/
setTimeout(function () {
    console.log(1);
}, 1000);
setImmediate(function () {
    console.log(2);
});

//nexttick > setTimeout >< setImmediate;






