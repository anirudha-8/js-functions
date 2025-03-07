// 05-Problem statement - Write a function to find maximum of two numbers.

function maximumOfTwoNumbers(number1, number2) {
	return number1 >= number2 ? number1 : number2;
}

const number1 = 8;

const number2 = 88;

const result = maximumOfTwoNumbers(number1, number2);

console.log(`Maximum between ${number1} and ${number2} is: ${result}`);
