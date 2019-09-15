function capitalizeWords(str) {
	let words = str.split(' ').map(word => {
		let firstLetter = word.slice(0, 1);
		let rest = word.slice(1);
		firstLetter = firstLetter.toUpperCase();
		return `${firstLetter}${rest}`;
	});

	return words.join(' ');
}

console.log(capitalizeWords('i love to code'));

function capitalizeWords2(str) {
	let words = str.split(' ').map(word => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	});

	return words.join(' ');
}

console.log(capitalizeWords2('i love to code'));