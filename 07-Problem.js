// 07-Problem statement - Write a function that accepts a string and return its reverse.

function reverseString(str) {
	if (typeof str !== "string" || !str.length)
		return "Empty String! Provide valid string!";
	return str.split("").reverse().join("");
}

const name = "Anirudha";

const result = reverseString(name);

console.log(`The reversed string of "${name}" is: "${result}"`);
