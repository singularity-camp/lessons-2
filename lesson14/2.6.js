filter([1, 2, 3, 4], (v) => v > 2); // [3, 4]
filter(["pie", "pony", "browny", "coffee"], (v) => v.includes("ny")); // ["pony", "browny"]
filter(
	[{age: 20}, {age: 30}, {age: 40}, {age: 50}],
	({age}) => age === 20
); // [20]

function filter(arr, cb) {
	const newArr = [];

	for (const a of arr) {
		if (cb(a)) {
			newArr.push(a);
		}
	}

	console.log(newArr)

	return newArr;
}
