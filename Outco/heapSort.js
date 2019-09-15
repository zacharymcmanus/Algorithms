/*
 *  Target Practice 08 - Heapsort
 */

'use strict';

/*
 *  Heapsort
 *
 *  Prompt:    Given an unsorted array of integers, return the array
 *             sorted using heapsort.
 *
 *  Input:     input {Array}
 *  Output:    {Array}
 *
 *  Example:   [3,9,1,4,7] --> [1,3,4,7,9]
 */

// Worse Time Complexity:
// Worse Auxiliary Space Complexity:
// Average Time Complexity:
// Average Auxiliary Space Complexity:


function heapsort(arr) {

  // Convert unsorted array to maxheap

  // console.log(arr);
  for (let i = arr.length - 1; i > -1; i--) {
    bubbleDown(i, arr, arr.length);
  }

  // console.log(arr);



  // Convert maxheap to sorted array
  let boundary = arr.length;

  while (boundary > 0) {
    swap(arr, 0, boundary - 1);
    boundary--;
    bubbleDown(0, arr, boundary);
  }

  // console.log(arr);
  return arr;
}

function bubbleDown(parentIndex, arr, boundary) {
  let childIndex = getChildIndex(parentIndex, arr, boundary);

  while (childIndex < boundary && arr[parentIndex] < arr[childIndex]) {
    swap(arr, parentIndex, childIndex);
    parentIndex = childIndex;
    childIndex = getChildIndex(parentIndex, arr, boundary);
  }
};

function getChildIndex(parentIndex, arr, boundary) {
  let childIndex1 = 2 * parentIndex + 1;
  let childIndex2 = 2 * parentIndex + 2;

  if (childIndex1 >= boundary) {
    return childIndex1;
  } else if (childIndex2 >= boundary) {
    return childIndex1;
  } else if (arr[childIndex1] > arr[childIndex2]) {
    return childIndex1;
  } else {
    return childIndex2;
  }

}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}




////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////


// custom assert function to handle tests
// input: count {Array} - keeps track out how many tests pass and how many total
//        in the form of a two item array i.e., [0, 0]
// input: name {String} - describes the test
// input: test {Function} - performs a set of operations and returns a boolean
//        indicating if test passed
// output: {undefined}
function assert(count, name, test) {
  if(!count || !Array.isArray(count) || count.length !== 2) {
    count = [0, '*'];
  } else {
    count[1]++;
  }

  let pass = 'false';
  let errMsg = null;
  try {
    if (test()) {
      pass = ' true';
      count[0]++;
    }
  } catch(e) {
    errMsg = e;
  }
  console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
  if (errMsg !== null) {
    console.log('       ' + errMsg + '\n');
  }
}


// check if an array is sorted in linear time
function isSorted(arr) {
  if (arr.length < 2){ return true; }
  for (let i = 1; i < arr.length; i++){
    if (arr[i-1] > arr[i]) { return false; }
  }
  return true;
}


// compare if two flat arrays are equal
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) { return false; }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { return false; }
  }
  return true;
}

console.log('heapsort tests');
let testCount = [0, 0];

assert(testCount, 'able to sort a single-element array', () => {
  let results = heapsort([5]);
  return arraysEqual(results, [5]);
});

assert(testCount, 'able to sort a medium-sized unsorted array', () => {
  let results = heapsort([4,15,16,50,8,23,42,108]);
  return arraysEqual(results, [4,8,15,16,23,42,50,108]);
});

assert(testCount, 'able to sort a large unsorted array', () => {
  let test = [];
  for (let i = 0; i < 1000000; i++){
    test.push(Math.floor(Math.random() * 1000000));
  }
  let solution = heapsort(test.slice());
  test = test.sort((a , b) => { return a - b; });
  return arraysEqual(solution, test);
});
console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');