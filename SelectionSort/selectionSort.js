/*
Selection Sort goes through the array to find the minimum number, and once it finds the minimum, it will swap the minimum to the front of the array.  
The algorithm will go through the array and continue to find the next minimum number and bring it to the front till it goes through the array's length
This Algorithm does less swapping than Bubble Sort. 
Big O Notation: O(n^2)
*/

// Steps
// 1. Loop through entire array
// 2. Set min index at the first index of each loop, which will be swapped for the smallest number in the length of the array
// 3. Once this loop completes, the minimum number will be at the front, 'i' will increase, thus the new 'i' will be swapped for the next lowest number
// 4. The swap happens after the min number is found in the inner loop, which only exists to find the index of the smaller number

// Solution #1
uA = [56, 22, 44, 22, 0, 11];

function selectionSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var min = i;
        for (j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

console.log(selectionSort(uA));

// Solution #2 
var arr = [1, 3, 2];

function selectionSort(arr) {
    var i, j, minIx, minVal;

    for (i = 0; i < arr.length; i++) {
        minVal = arr[minIx = i];

        for (j = i + 1; j < arr.length; j++) {
            arr[j] < minVal && (minVal = arr[minIx = j]);
            temp = arr[i];
            arr[i] = arr[minIx];
            arr[minIx] = temp;
        }
    }
    return arr;
}

console.log(selectionSort(arr));