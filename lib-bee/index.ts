/// <reference lib="es2015" />
/// <reference lib="esnext.asynciterable" />
const buff = require('buffer/').Buffer 

export function getBase64(str: string):string{
	const bufferConversionResult = buff.from(str, 'ascii');
	console.log("lib-bee printing base64 for buffer - '" + str + "', 'ascii'");
	const res: string = bufferConversionResult.toString('base64');
	console.log(res);
	return res;
	// should print for 'hello world': aGVsbG8gd29ybGQ=
}
