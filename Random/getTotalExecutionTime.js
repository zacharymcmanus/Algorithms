// Write a function that receives an array 'arr' of processable non-unique integers and a cooldown 'c'. This function returns the total execution time for the array.
// Each unique integer has a cooldown of 'c' seconds before another integer of the same value can be processed. Each integer requires 1 second for processing.

// input [1, 2, 1, 1, 2, 2, 2], 2
// output 14

function getTotalExecutionTime(arr, c) {
    let map = {};
    let time = 0;
    current = 0;

    for (let i = 0; i < arr.length; i++) {
        current = arr[i];
        if (!map[current] || map[current] + c < time) {
            map[current] = time += 1;
        } else {
            time = map[current] += c + 1;
        }
    }
    return time;
}
 
console.log(getTotalExecutionTime([1, 2, 1, 1, 2, 2, 2], 2));