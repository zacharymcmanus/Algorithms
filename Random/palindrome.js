// Given a string, return true if the string is a palindrome or false it if it is not.
// Palindromes are strings that form the same word if it is reversed.
// Include spaces and punctuation in determining if the string is a palindrome.

// Solution #1
function reverseString(str) {
    return str.split('').reverse().join('');
}

function palindrome(str) { 
    rev = reverseString(str);

    if (rev === str) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrome('zach'));

// Solution #2
function palindrome2(str) {
    const reversed = str.split('').reverse().join('');

    return str === reversed; 
}

// Solution #3
function palindrome3(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    })
}