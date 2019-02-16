// Space Complexity: O(n) space since returning newArr gives us back n numbers

function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

console.log(double([1,2,3]));