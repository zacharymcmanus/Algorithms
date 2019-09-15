function commonDivisors(num1, num2) {
	let min = Math.min(num1, num2);
	let max = min === num1 ? num2 : num1;

	if (min & max) {
		return min;
	} else {
		let mid = Math.floor(max/2);
		let _divisor = mid;
		for (let i = mid; i > 0; i--) {
			if (max/i && min/i) {
				_divisor = i;
			}
		}
		return _divisor;
	}
}