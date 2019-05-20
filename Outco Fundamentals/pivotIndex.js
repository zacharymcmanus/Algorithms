function isNumber(number) {
    return typeof number === 'number';
}

function addAll(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
    }
    return sum;
}

function pivotIndex(numbers) {
    if (!numbers.every(isNumber)) {
        return 'Array must contain all numbers';
    }

    for (var i = 0; i < numbers.length; i++) {
		var leftSum = addAll(numbers.slice(0, i));
		var rightSum = addAll(numbers.slice(i + 1));

		if (leftSum === rightSum) {
			return i;
		}
	}
    return -1;  
}


// console.log(pivotIndex([4,12,13,14,15]));
console.log(pivotIndex([4,12,13,14]));

