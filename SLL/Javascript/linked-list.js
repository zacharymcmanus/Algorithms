// [10] -> [20] -> [30] -> null

// Object Constructor
function LinkedList() {
    this.head = null;
};

// Checks to see if list is empty
LinkedList.prototype.isEmpty = function() {
    // if (this.head === null) {
    //     return true;
    // } else {
    //     return false;
    // }

    // simpler way than above
    return this.head === null;
};

// Checks the size of the list
LinkedList.prototype.size = function() {
    var current = this.head;
    var count = 0;

    while (current !== null) {
        count++;
        current = current.next;
    }

    return count;
};

// Adds node to beginning of list
LinkedList.prototype.prepend = function(val) {
    // 1. Create a new node with val
    // 2. Make new node point to the current head
    // 3. Update this.head to point to the new node

    var newNode = {
        data: val,
        next: this.head
    };

    this.head = newNode;
};

// Adds node to the end of list
LinkedList.prototype.append = function(val) {
    // 1. Create a new node using val
    // 2. Traverse to end of list
    // 3. Make the last node's 'next' value point to the new node

    var newNode = {
        data: val, 
        next: null
    };

    if (this.isEmpty()) {
        this.head = newNode;
        return;
    }

    var current = this.head;

    while (current.next !== null) {
        current = current.next;
    }

    current.next = newNode;
};

// Checks to see if list contains certain value
LinkedList.prototype.contains = function(val) {
    var current = this.head;

    while (current !== null) {
        if (current.data === val) {
            return true;
        }
        current = current.next;
    }
    return false;
}

// Removes a node with a given value
LinkedList.prototype.remove = function(val) {
    if (!this.contains(val)) {
        return;
    }

    if (this.head.data === val) {
        this.head = this.head.next;
        return;
    }

    var prev = null;
    var curr = this.head;

    while (curr.data !== val) {
        prev = curr;
        curr = curr.next;
    }

    prev.next = curr.next;
}

// Prints list in a nicer format
LinkedList.prototype.print = function() {
    var output = '[';
    var current = this.head;

    while (current !== null) {
        output += current.data;
        if (current.next !== null) {
            output += ', ';
        }
        current = current.next;
    }

    output += ']';
    console.log(output);
}

var list = new LinkedList();
list.append(10);
list.append(15);
list.append(20);
list.append(25);
list.prepend(5);
console.log(list.contains(10));
console.log(list.size());
list.remove(15);
list.print();




