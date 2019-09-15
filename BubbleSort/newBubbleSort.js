function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; i < (arr.length - i - 1); j++) {
			if (arr[j] > arr[j+1]) {
				const lesser = arr[j+1];
				console.log('lesser', lesser)
				arr[j+1] = arr[j];
				console.log('arr[j+1]', arr[j+1])
				arr[j] = lesser;
				console.log('arr[j]', arr[j])
			}
		}
	}
	// return sorted array
	return arr;
}

console.log(bubbleSort([55,2,99,0]));