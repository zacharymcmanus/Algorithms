// Given an array and chunk size, divide the array into many subarrays where each subarray is of length size
// Example: chunk([1,2,3,4], 2) === [[1,2], [3,4]]

// Solution #1
function arrayChunk(array, size) {
    const chunked = [];

    for (let element of array) {
        const last = chunked[chunked.length - 1];

        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }
    return chunked;
}

console.log(arrayChunk([1,2,3,4], 2));

// Solution #2
function arrayChunk2(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}

console.log(arrayChunk2([1,2,3,4], 2));