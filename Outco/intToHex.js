function intToHex(n) {
    let lib = '0123456789acdef';
    if (n < 16) {
        return lib[n];
    }

    return intToHex(Math.floor(n / 16) + lib[n % 16])
}

console.log(intToHex(10));