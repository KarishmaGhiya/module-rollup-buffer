import * as index from "../index";
import chai from "chai";
const should = chai.should();
describe('evaluate #RunnableInBrowser',function(){

    it('base64',function(){
        should.equal(index.getBase64('hello world'),'aGVsbG8gd29ybGQ=');
    });
});