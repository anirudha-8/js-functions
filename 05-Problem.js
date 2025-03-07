// 05-Problem statement - Write a function to find maximum of two numbers.

function maximumOfTwoNumbers(number1, number2) {
	if (typeof number1 !== "number" || typeof number2 !== "number")
		return "Invalid input! Provide numbers input only!";
	if (number1 === number2) return "Both numbers are equal!";

	// return number1 >= number2 ? number1 : number2;
	return Math.max(number1, number2);
}

const number1 = 8;

const number2 = 88;

const result = maximumOfTwoNumbers(number1, number2);

console.log(
	typeof result === "number"
		? `Maximum between ${number1} and ${number2} is: ${result}`
		: result
);
