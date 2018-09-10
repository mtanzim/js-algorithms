const TreeNode = require('./TreeNode');

class BST {
  constructor() {
    this.root = null;
  }
  printBST() {
    console.log(JSON.stringify(this, null, 2));
  }

  findNode (input) {
    return this.root.findNode(input, this.root) || null;
  }

  insertNode (input) {
    if (this.root === null) {
      this.root =  new TreeNode(input);
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

  let treeArr = [100, 5, 6, -99, 45, 67];

  myBST = new BST();
  // myBST.printBST();
  // console.log(`\n\n${myBST.findNode(39)}`);

  treeArr.forEach (a=> myBST.insertNode(a));
  myBST.printBST();
  treeArr.forEach(a => console.log(`${myBST.findNode(a)}`));
  
/*   myBST.insertNode(1);
  myBST.insertNode(-1);
  myBST.insertNode(107);
  myBST.insertNode(56);
  myBST.printBST();

  console.log(`\n\n${myBST.findNode(1)}`);
  console.log(`\n\n${myBST.findNode(-1)}`);
  console.log(`\n\n${myBST.findNode(107)}`);
  console.log(`\n\n${myBST.findNode(56)}`); */

}

driverCode();

// leftNodeA.printNode();