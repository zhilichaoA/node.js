exports.name = 1;
console.log(1);



/*
 * (function(exports,require,module,__filename,__dirname){ 因为每个模块是独立的不可能去更改__filename和__dirname
 *   exports = module.exports = {} 当前的this指向的就是eports对象
 *   exports.name = 1
     return module.exports;
     });
* */