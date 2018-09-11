const TreeNode = require('./TreeNode');

class BST {
  constructor() {
    this.root = null;
  }
  printBST() {
    console.log(JSON.stringify(this, null, 2));
  }

  findNode(input) {
    return this.root.findNode(input, this.root) || null;
  }

  findMin () {
    return this.root.findMinNode(this.root);
  }

  findMax () {
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

  // let leftNodeA = new TreeNode(25);
  // let rightNodeA = new TreeNode(39);
  // let leftParentNode = new TreeNode(33, leftNodeA, rightNodeA);

  // let leftNodeB = new TreeNode(60);
  // let rightNodeB = new TreeNode(78);
  // let rightParentNode = new TreeNode(65, leftNodeB, rightNodeB);

  // let grandParentNode = new TreeNode(0, leftParentNode, rightParentNode);

  // grandParentNode.printNode();

  // myBST = new BST(grandParentNode);

  let treeArr = [2, 4, 3, 5, -1];

  myBST = new BST();
  // console.log(`\n\n${myBST.findNode(39)}`);

  treeArr.forEach(a => myBST.insertNode(a));
  myBST.printBST();
  // console.log(myBST.findMin().node.data);
  // console.log(myBST.findMax().node.data);
  /*   console.log('\nparents:')
  treeArr.forEach(a => console.log(`${myBST.findNode(a).parent ? myBST.findNode(a).parent.data : 'no parent'}`));
  console.log('\nnodes:')
  treeArr.forEach(a => console.log(`${myBST.findNode(a).node.data}`));
  console.log(`\nisLeftChild`)
  treeArr.forEach(a => console.log(`${myBST.findNode(a).isLeftChild}`)); */
  
  // delete each node
  treeArr
  .filter(d => d === -1)
  .forEach ( d => myBST.deleteNode(d));
  
  myBST.printBST();
  // console.log(myBST.findMin().node.data);
  // console.log(myBST.findMax().node.data);
}

driverCode();

// leftNodeA.printNode();