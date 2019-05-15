// Iteratively
function countDown(num) {
    for (var i = num; i > 0; i--) {
        console.log(i);
    }
    console.log('all done!')
}

console.log(countDown(5))

// Recursion
function countDownRec(num) {
    if (num <= 0) {
        console.log('all done!');
        return;
    }
    console.log(num);
    num--;
    countDownRec(num);
}

