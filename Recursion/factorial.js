// Iteratively
function factorial(num) {
    let total = 1;
    for (var i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

console.log(factorial(4));

// Recursively
function recursiveFactorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

console.log(recursiveFactorial(4));