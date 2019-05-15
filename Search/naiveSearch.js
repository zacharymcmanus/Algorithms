function naiveSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            if (short[j] !== long[i+j]) {
                console.log("break!")
                break;
            }
            if (j === short.length - 1) {
                console.log("found one!")
                count++;
            }
        }
    }
    return count;
}

console.log(naiveSearch("lorie loled", "lol"));