// Big O: O(n) because as n grows, the number of operations grows in proportion with n

function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5,n); i++) {
        console.log(i);
    }
}

console.log(logAtLeast5(2));