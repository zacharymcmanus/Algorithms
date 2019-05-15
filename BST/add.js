function Node(val) {
    this.value = val;
    this.right = null;
    this.left = null;
}

function BST () {
    this.root = null;
}

BST.prototype.add = function(val) {
    var root = this.root;

    if (!root) {
        this.root = new Node(val);
        return;
    }

    var currentNode = root;
    var newNode = new Node(val);

    while(currentNode) {
        if(val < currentNode.value) {
            if(!currentNode.left) {
                currentNode.left = newNode;
                break;
            } 
            else {
                currentNode = currentNode.left;
            }
        }
        else {
            if(!currentNode.right) {
                currentNode.right = newNode;
                break;
            }
            else {
                currentNode = currentNode.right;
            }
        }
    }
}

BST.prototype.remove = function(val) {
    var root = this.root;

    if (root == null) {
        return null;
    } else if {
        
    }
}

var bst = new BST();
bst.add(3);
bst.add(2);
bst.add(5);
bst.add(7);
console.log(bst)