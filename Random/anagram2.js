// Check to see if two provided strings are anagrams of each other. One string is an angram of another if it uses the same characters in the same quanity. Only consider characters, not spaces or punctuation. Consider capital letters to be the same as lower case. 
// Example: anagrams('rail safety', 'fairy tales') === True

// Solution #1
function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }
 /
    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    return true;
}

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, "")) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

console.log(anagrams('rail safety', 'fairy taless'));

// Solution #2
function anagrams2(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

console.log(anagrams2('rail safety', 'fairy tales'));
