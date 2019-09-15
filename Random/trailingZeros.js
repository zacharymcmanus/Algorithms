function trailingZeros(n) {
	let base = 5;
	let result = 0;

	while (base <= n) {
		result += Math.floor(n / base);
		base = base * 5;
	}

	return result;
}

// Observation: at every multiple of 5, we've got an additional zero
// At 25!, we have an additional zero
// At 50!, we have another additonal zero

// Ideas:
// Guessing that we're going to have an additional zero at 75!
// At 125! we'll likely have three additional zeros
// This is all deu to the presence of 5s in the factorial

