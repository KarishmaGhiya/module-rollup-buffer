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

exports.getBase64 = getBase64;
//# sourceMappingURL=index.js.map
