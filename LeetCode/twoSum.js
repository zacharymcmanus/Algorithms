// Solution 1: O(n^2)
var twoSum = function(nums, target) {
    var result = [];
    
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
};

console.log(twoSum([1,2,3,4,5], 3))

// Solution 2: O(n)
function twoSumBest(array, target) {
    const numsMap = new Map();
    for (let i = 0; i < array.length; i++) {
        if(numsMap.has(target - array[i])) {
            return [numsMap.get(target - array[i], i)];
            // get() returns a specified element associated with the specified key from the Map object.
        } else {
            numsMap.set(array[i], i);
            //  set() adds or updates an element with a specified key and value to a Map object.
        }
    }
}

console.log(twoSumBest([1,2,3,4,5], 3))

