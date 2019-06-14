(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('lib-bee')) :
    typeof define === 'function' && define.amd ? define(['lib-bee'], factory) :
    (global = global || self, factory(global.libBee));
}(this, function (libBee) { 'use strict';

    /// <reference lib="es2015" />
    const buff = require("buffer/").Buffer;
    function convertToBase64(str) {
        return libBee.getBase64(str);
    }
    function convertToHex(str) {
        const bufferConversionResult = buff.from(str, "ascii");
        console.log("lib-aaa printing hex for buffer - '" + str + "', 'ascii'");
        const res = bufferConversionResult.toString("hex");
        console.log(res);
        return res;
        // should print for 'hello world': 68656c6c6f20776f726c64
    }

    var chai = require('chai');
    var expect = chai.expect;
    describe('evaluate', function () {
        it('hex', function () {
            expect(convertToHex('hello world')).toBe('68656c6c6f20776f726c64');
        });
        it('base64', function () {
            expect(convertToBase64('hello world')).toBe('aGVsbG8gd29ybGQ=');
        });
    });

}));
//# sourceMappingURL=index.js.map
