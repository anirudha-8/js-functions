// 03-Problem statement - Write a function that accepts an array and returns the sum of its element

function sumOfArray(arr) {
	if (!Array.isArray(arr) || arr.some((item) => typeof item !== "number"))
		return "Invalid input! Please provide an array of numbers only!";
	if (arr.length === 0) return 0;
	return arr.reduce((acc, item) => acc + item, 0);
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];

const result = sumOfArray(numbersArray);

console.log(`Sum of elements of array is: ${result}`);
