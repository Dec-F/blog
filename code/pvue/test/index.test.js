// import {expect} from 'chai';
// import add from '../index';
var add=require('../index')
var expect=require('chai').expect

describe('测试',function() {
    it('may',function() {
        expect(add(2,'')).to.be.equal('2')
    })
})



