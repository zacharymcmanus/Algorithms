function BST () {
    this.root = null;
}
function BSTNode(val) {
    this.right = null;
    this.left = null;
    this.val = val;
}
var RH,LH;

// BSTNode.prototype.BSTTrav(){
//     if(this.left != null) {
//         this.left.BSTTrav();
//     }
//     console.log(this.val);
//     if(this.right != null) {
//         this.right.BSTTrav();
//     }
// }

BST.prototype.insert(val) { 
    var newNode = new BSTNode(val); 
    if(this.root === null) {
        this.root = newNode; 
    } else {
        this.insertNode(this.root, newNode); 
    }
} 
  
BSTNode.prototype.insertNode(node, newNode) { 
    if(newNode.val < node.val) { 
        if(node.left === null) 
            node.left = newNode; 
        else {
            this.insertNode(node.left, newNode);  
        }
    } 
    else { 
        if(node.right === null) {
            node.right = newNode; 
        } else {
            this.insertNode(node.right,newNode); 
        }
    } 
} 

BSTNode.prototype.height() {
    var LH = 0;
    var RH = 0;
    if(this.left){
        LH = this.left.getHeight();
    } 
    if (this.right) {
        RH = this.right.getHeight();
    } 
    return Math.max(LH,RH) + 1;
}

BSTNode.prototype.getHeight(){
    if(this.root) {
        this.root.height();
        return this.root.height();
    } else {
        return 0;
    }
}

var tree = new BST();
tree.insert(20);
console.log(getHeight())