function AnagramPalindrome (word) {
    word = word.toLowerCase().replace(/[^\w]/g, '');
    var length = word.length;
    var pivot = Math.floor(length / 2);
    for (var i = length - 1; i > pivot; i--) {
        var positionTail = i;
        var positionHead = (length - 1) - i;
        var charFromTail = word[positionTail];
        var charFromHead = word[positionHead];
        if (charFromTail !== charFromHead) {
            return false;
        }
    }
    return true;
}

console.log(AnagramPalindrome("racecar"))