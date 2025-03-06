// 02-Problem statement - Create a function to calculate area of circle with a given radius.

function areaOfCircle(radius) {
	if (typeof radius !== "number" || radius < 0) return "Invalid radius!";

	if (radius === 0) return 0;

	// return Math.PI * Math.pow(radius, 2);
	// return Math.PI * radius * radius;
	return Math.PI * radius ** 2;
}

const result = areaOfCircle(8);

console.log(`Area of circle: ${result}`);
