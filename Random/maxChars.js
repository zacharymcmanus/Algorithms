// Given a string, return the character that is most commonly used in the string.
// Example: maxChar("abcccccd") === "c", maxChar("apple 12111111") == "1"

function maxChars(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for(let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(maxChars("heeeello"));