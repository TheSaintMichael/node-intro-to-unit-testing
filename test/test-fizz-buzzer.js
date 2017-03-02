const should = require('chai').should();
const fizzBuzz = require('../fizzBuzzer');

//Unit tests for our `fizzbuzz` function.
describe ('fizzBuzz', function (){
	//test the normal case scenario for Fizzbuzz
	it('should return a result based on a certain number.', function (){
		const normalCase = [
		{num: 1, expected: 1},
		{num: 5, expected: "buzz" },
		{num: 15,expected: "fizz-buzz"},
		{num: 3, expected: "fizz" }
		];
	normalCase.forEach(function(input) {
		const number = fizzBuzz(input.num);
		number.should.equal(input.expected);
	});
});

	it('should raise error if arg is NAN.', function() {
		//Input which isn't a number. Breaking the module.
		const wrongInputs = [
			['1'],
			['one'],
			[true],
			[false],
		];
		wrongInputs.forEach(function(input) {
			(function (){
				fizzBuzz(input[0])
			}).should.throw(Error);
			});
		});
	});