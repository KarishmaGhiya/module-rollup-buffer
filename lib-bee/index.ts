/// <reference lib="es2015" />
/// <reference lib="esnext.asynciterable" />
const buff = require('buffer/').Buffer 
const bufferConversionResult = buff.from('hello world', 'ascii');
console.log("lib-bee printing base64 for buffer - 'hello world', 'ascii'");
console.log(bufferConversionResult.toString('base64'));
// should print: aGVsbG8gd29ybGQ=