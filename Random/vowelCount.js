// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

// Solution 1
function getCount(str) {
    var vowelsCount = 0;

    splitStr = str.split('');
    for (let i = 0; i < splitStr.length; i++) {
        if (splitStr[i].match(/^(a|e|i|o)$/)) {
            vowelsCount++;
        }
    }

    return vowelsCount;
}

console.log(getCount('aeioo'));

// Solution 2
function getCountTwo(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(letter => {
        return vowels.includes(letter) ? true : false;
    }).length;
}
