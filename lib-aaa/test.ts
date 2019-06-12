import * as index from "./index";
var chai = require('chai');  
var expect = chai.expect; 
describe('evaluate',function(){

    it('hex',function(){
        expect(index.convertToHex('hello world')).toBe('68656c6c6f20776f726c64');
    });

    it('base64',function(){
        expect(index.convertToBase64('hello world')).toBe('aGVsbG8gd29ybGQ=');
    });
});