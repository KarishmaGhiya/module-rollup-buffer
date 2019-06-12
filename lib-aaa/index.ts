/// <reference lib="es2015" />
/// <reference lib="esnext.asynciterable" />
const buff = require('buffer/').Buffer 
const bufferConversionResult = buff.from('hello world', 'ascii');
console.log("lib-aaa printing hex for buffer - 'hello world', 'ascii'");
console.log(bufferConversionResult.toString('hex'));
// should print: 68656c6c6f20776f726c64