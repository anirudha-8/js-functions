// 1-Problem statement - Write a function to check if number is even or odd.

function checkEvenOdd(number) {
	if (typeof number !== "number" || isNaN(number))
		return "Invalid input! Please provide a number only!";
	return number % 2 === 0 ? "Even" : "Odd";
}

const result = checkEvenOdd(8);

console.log(`Number is ${result}`);
