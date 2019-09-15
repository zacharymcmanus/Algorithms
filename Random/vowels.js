// Solution #1
function vowels(str) {
    var m = str.match(/[aeiou]/gi);
    return m === null ? 0 : m.length;
}

console.log(vowels('Hello'));

// Solution #2
function findVowels(str) {
    let count = 0;
    const checker = ["a", "e", "i", "o", "u"];

    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(findVowels('Hello'));
