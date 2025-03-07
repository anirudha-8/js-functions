// 08-Problem statement - Create a function to find the largest number in an array.

function findLargestNumberInArray(arr) {
	if (!Array.isArray(arr) || !arr.length)
		return "Invalid input! Provide valid non-empty array!";

	if (arr.some((item) => typeof item !== "number"))
		return "Invalid input! Array must contains only number items!";

	if (arr.length === 1) return arr[0];

	return Math.max(...arr);
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];

const result = findLargestNumberInArray(numbersArray);

console.log(
	typeof result === "number"
		? `Largest number in an array [${numbersArray}] is: ${result}`
		: result
);
