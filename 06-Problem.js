// 06-Problem statement - Create a function that takes a number and returns its factorial.

function calculateFactorial(number) {
	if (typeof number !== "number" || number < 0)
		return "Invalid input! Provide non-negative number input only!";
	if (number === 0 || number === 1) return 1;
	return number * calculateFactorial(number - 1);
}

const factNumber = 8;

const result = calculateFactorial(factNumber);

console.log(`Factorial of ${factNumber} is: ${result}`);
