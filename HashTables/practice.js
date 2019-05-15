class HashTable {
    constructor(size=4) {
        this.keyMap = new Array(size);
    }

    old_hash(key, arrayLen) {
        let total = 0;
        //loop through each character in word
        for (let char of key) {
            let value = char.CharCodeAt(0) - 96
            total = (total + value) % arrayLen;
        }
        return total;
    }

    _hash(key, arrayLen) {
        let total = 0;
        let odd_prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * odd_prime + value) % arrayLen;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value])
    }
}

console.log("z".charCodeAt(0) - 96);

