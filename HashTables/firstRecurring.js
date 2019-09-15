function firstRecurringChar(input) {
	const map = {};

	for (let i = 0; i < input.length; i++) {
		if (map[input[i]] !== undefined) {
			return input[i]
		} else {
			map[input[i]] = i
		}
		console.log(map);
	}
	return undefined;
}

firstRecurringChar([2,5,1,2,3,4,5,5]);