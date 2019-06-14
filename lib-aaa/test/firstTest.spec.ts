import * as index from "../index";
import chai from "chai";
const should = chai.should();
describe('evaluate #RunnableInBrowser',function(){

    it('hex',function(){
        should.equal(index.convertToHex('hello world'),'68656c6c6f20776f726c64');
    });

    it('base64',function(){
        should.equal(index.convertToBase64('hello world'),'aGVsbG8gd29ybGQ=');
    });
});