function groupAnagrams(words) {
	// toss each word into array corresponding with its numbers hash
	let work = {};

	for (let i = 0; i < words.length; i++) {
		let key = gethash(words[i]);
		if (key in work) {
			work[key].push(words[i]);
		} else {
			work[key] = words[i]
		}
	}

	// grab all arrays and place in result array

	let result = [];

	for (let key in work) {
		result.push(work[key]);
	}

	console.log(result);
	return result;
}