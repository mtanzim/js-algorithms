const TreeNode = require('./BSTNode');

class BST {
  constructor() {
    this.root = null;
  }
  printBST() {
    // console.log(this);
    console.log(this && JSON.stringify(this, null, 2));
  }

  inOrderTraverse() {
    return this.root.inOrderTraverse(this.root);
  }
  preOrderTraverse() {
    return this.root.preOrderTraverse(this.root);
  }
  postOrderTraverse() {
    return this.root.postOrderTraverse(this.root);
  }
  findNode(input) {
    return this.root.findNode(input, this.root) || null;
  }

  findMin() {
    return this.root.findMinNode(this.root);
  }

  findMax() {
    return this.root.findMaxNode(this.root);
  }

  deleteNode(input) {
    return this.root.deleteNode(input, this.root) || null;
  }

  insertNode(input) {
    if (this.root === null) {
      this.root = new TreeNode(input);
    } else {
      this.root.insertNode(input);
    }
  }
}



module.exports = BST;

const driverCode = () => {

  let treeArr = [52, 33, 25, 12, 27, 39, 34, 48, 65, 60, 78, 72, 90];

  myBST = new BST();
  // console.log(`\n\n${myBST.findNode(39)}`);

  treeArr.forEach(a => myBST.insertNode(a));
  myBST.printBST();
  
  let arrPreOrder = myBST.preOrderTraverse();
  let arrPostOrder = myBST.postOrderTraverse();
  let arrInOrder = myBST.inOrderTraverse();
  
  
  
  
  
  // delete node(s)
  treeArr
  // .filter(d => d === -1)
  .reverse()
  .forEach(d => myBST.deleteNode(d));
  
  console.log(arrInOrder);
  treeArr.forEach(a => myBST.insertNode(a));
  arrInOrder.forEach(d => myBST.deleteNode(d));
  myBST.printBST();
  console.log(arrPreOrder);
  treeArr.forEach(a => myBST.insertNode(a));
  arrPreOrder.forEach(d => myBST.deleteNode(d));
  myBST.printBST();
  console.log(arrPostOrder);
  treeArr.forEach(a => myBST.insertNode(a));
  arrPostOrder.forEach(d => myBST.deleteNode(d));
  myBST.printBST();
}

driverCode();
