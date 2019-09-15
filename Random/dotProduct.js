// Given two vectors 'v1' and 'v2', return the dot product of the two vectors. 

// input: [1,2,0,4,3,6], [0,0,0,0,2,7]
// output: 48

function dotProduct(v1, v2) {
	return v1.reduce((accum, iter, index) => {
		accum += iter * v2[index];
		console.log(accum);
		return accum;
	}, 0)
}

console.log(dotProduct([1,2,0,4,3,6], [0,0,0,0,2,7]));

