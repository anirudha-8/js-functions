// 09-Problem statement - Write a function that converts a string to kebab-case (e.g - "Hello World" -> "hello-world").

function toKebabCaseConversion(str) {
	if (typeof str !== "string" || !str.trim().length)
		return "Invalid input! Provide non-empty string in input!";

	return str.trim().toLowerCase().replace(/\s+/g, "-").replace(/-+/g, "-");
}

const name = "Anirudha - Bele";

const kebabCaseResult = toKebabCaseConversion(name);

console.log(
	`kebab-case version of the string "${name}" is: "${kebabCaseResult}"`
);
