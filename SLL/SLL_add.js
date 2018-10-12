// Display a string containing all list values
function Display(list) {
    if(!list.head){
        return "Empty List"
    }
    var valuestring = "";
    var current = list.head;
    while (current) {
        valuestring += current.value + ", ";
        current = current.next
    }
    return valuestring;
}

// Object Constructor
function SLL(list) {
    this.head = null;
}

// Mode Constructor
function Node(value) {
    this.value = value;
    this.next = null;
}

// Create a SLL
var mylist = new SLL();
mylist.head = new Node("A");
mylist.head.next = new Node("B");
mylist.head.next.next = new Node("C");
mylist.head.next.next.next = new Node("D");

// Function addToList
function addToList(list, val) {
    var newnode = new Node(val);
    if (!list.head) {
        list.head = newnode;
    } else {
        var current = list.head;
        while (current.next) {
            current = current.next
        }
        current.next = newnode;
    }
    return list;
}

console.log(Display(mylist))
console.log(addToList(mylist, "E"))
console.log(Display(mylist))