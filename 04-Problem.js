// 4-Problem statement - Create a function that checks if a string starts with a specific character.

function checkString(str, searchString) {
	if (typeof str !== "string" || typeof searchString !== "string")
		return "Invalid input! Both the inputs must be strings!";

	if (searchString.length === 0) {
		return "Invalid input! Search string cannot be empty!";
	}

	return str.startsWith(searchString);
}

const str = "Anirudha";

const specificChar = "Ani";

const result = checkString(str, specificChar);

if (result) {
	console.log(
		`The string "${str}" starts with these specific character "${specificChar}"`
	);
} else {
	console.log(
		`The string "${str}" does not starts with these specific character "${specificChar}"`
	);
}
