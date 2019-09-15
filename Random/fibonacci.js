// Print out the n-th entry in the fibonacci series. The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two. 
// Example: fib(4) === 3

// Solution #1 Iterative
function fib(n) {
    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        const a = result[i - 1];
        const b = result[i - 2];

        result.push(a + b);
    }

    return result[n];
}

console.log(fib(4));

// Solution #2 Recursive
function fib2(n) {
    if (n < 2) {
        return n;
    }
    return fib (n - 1) + fib(n -2);
}

console.log(fib2(4));

// Solution #3 Memoization
function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}

const fastFib = memoize(fib2);