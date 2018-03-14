const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
  it('should check if it is divisible by 15,5, or 3',function(){

    const normalCases = [
      {a:3, expected:'fizz'},
      {a:5, expected:'buzz'},
      {a:15, expected: 'fizz-buzz'}
    ];

    normalCases.forEach(function(input){
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });
  it('should raise an error if args is not numbers', function(){
    const badInputs = [false,'no','frik'];

    badInputs.forEach(function(input){
      expect(function(){
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});
