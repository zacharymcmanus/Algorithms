// Write a function that accepts a string. The function should capitalize the first letter of each word in the string then return the capitalized string. 
// Example: capitalize('a short sentence') === 'A Short Sentence'

// Solution #1
function capitalize(str) {
    const words = [];

    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1)); 
    }
    return words.join(' ');
}

console.log(capitalize('a lowercase sentence'));

// Solution #2
function capitalize2(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === '') {
            str[i].toUpperCase();
        } else {
            results += str[i];
        }
    }
    return result;
}