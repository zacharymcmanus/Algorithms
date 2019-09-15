// Write a function that accepts a positive number n. The function should console log a step shape with n levels using the # character. Make sure the step has spaces on the right hand side. 
// Example: steps(2) 
//          '# '
//          '##

// Solution #1
function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';

        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#'
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}

console.log(steps(7));

// Solution #2 with recursion
function steps2(n, row = 0, stair = '') {
    if (row === n) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        steps(n, row + 1);
        return;
    }

    // if (stair.length <= row) {
    //     stair += '#';
    // } else {
    //     stair += ' ';
    // }

    // steps(n, row, stair);

    // refactored from above
    const add = stair.length <= row ? '#' : ' ';
    steps(n, row, stair + add);
}

console.log(steps2(7));