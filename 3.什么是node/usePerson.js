var usePerson = require('./person.js');
console.log(require.cache);//先看看缓存里有什么
//将缓存的文件删掉 可以多次执行require的文件
delete require.cache[require.resolve('./person.js')];
//加载了两次 但是只运行了一次
//想让person文件运行两次 那我们得把缓存的person删掉
//module.exports= usePerson
//console.log(usePerson.name);


/*
var obj = {
    currentObj:{},
    row:{}
}
delete obj.row*/
