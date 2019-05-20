// Standard Fibonacci 
function fib(n) {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(7));

// Memoization Fibonacci
function fib2(n, memo=[]) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

// Shortened Memoization Solution
function fib3(n, memo=[undefined,1,1]) {
    if (memo[n] !== undefined) return memo[n];
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

console.log(fib2(5))

// Tabulted Fibonacci
function fib4(n) {
    if (n <= 2) return 1;
    var fibNums = [0,1,1];
    for (var i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}