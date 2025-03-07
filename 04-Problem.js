// 4-Problem statement - Create a function that checks if a string starts with a specific character.

function checkString(str, searchString) {
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
