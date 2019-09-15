// Write a function that receives an array 'arr' of integers and an integer 'n' that is greater than 0 as arguements and return two indexes of a subsequence in the array that adds up to equal the value of 'n'

// input [1,2,1,7,5,4], 17
// output[2,5]

function subsequenceSum(arr, n) {
	let firstIndex = 0;
	let lastIndex = 1;
	let sum = arr[firstIndex] + arr[lastIndex];

	while (arr[lastIndex]) {
		if (sum === n) {
			return [firstIndex, lastIndex];
		} else if (sum < n) {
			lastIndex++;
			sum += arr[lastIndex];
		} else {
			sum -= arr[firstIndex] ;
			firstIndex++;
		}
	}
	return false;
}

console.log(subsequenceSum([1,2,1,7,5,4], 17));