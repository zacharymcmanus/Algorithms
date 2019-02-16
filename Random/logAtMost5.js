// Big O: 0(1) as n grows the big 0 is constant
function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

console.log(logAtMost5(100));

