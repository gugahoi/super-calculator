var sum = require('../src/sum.js').sum;

describe('sum', function(){
    it('should add 1 and 2', function(){
        expect(sum(1,2)).toBe(3);
    });
});