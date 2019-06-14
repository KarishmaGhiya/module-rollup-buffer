'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/// <reference lib="es2015" />
/// <reference lib="esnext.asynciterable" />
function getBase64(str) {
    const bufferConversionResult = Buffer.from(str, "ascii");
    console.log("lib-bee printing base64 for buffer - '" + str + "', 'ascii'");
    const res = bufferConversionResult.toString("base64");
    console.log(res);
    return res;
    // should print for 'hello world': aGVsbG8gd29ybGQ=
}

/// <reference lib="es2015" />
function convertToBase64(str) {
    return getBase64(str);
}
function convertToHex(str) {
    const bufferConversionResult = Buffer.from(str, "ascii");
    console.log("lib-aaa printing hex for buffer - '" + str + "', 'ascii'");
    const res = bufferConversionResult.toString("hex");
    console.log(res);
    return res;
    // should print for 'hello world': 68656c6c6f20776f726c64
}

exports.convertToBase64 = convertToBase64;
exports.convertToHex = convertToHex;
//# sourceMappingURL=index.js.map
