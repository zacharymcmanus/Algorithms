// Given an integer, return an integer that is the reverse ordering of numbers. 
// Example: reverseInt(15) = 51

function reverseInt(n) {
    const reversed =  n.toString().split('').reverse().join('');
    
    return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(-51));