class BST {
  constructor (rootNode) {
    this.root = rootNode;
  }
  printBST() {
    console.log(JSON.stringify(this, null, 2));
  }

  findNode(input, curNode =  this.root) {
    if (curNode  === null) return null;
    else if (input < curNode.data) return this.findNode(input, curNode.leftChild);
    else if (input > curNode.data) return this.findNode(input, curNode.rightChild);
    else {
      curNode.printNode();
      return curNode.data;
    }
  }
}

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.leftChild = left;
    this.rightChild = right;
  }

  printNode () {
    console.log(JSON.stringify(this, null, 2));
  }

  printNodeData () {
    console.log(this.data);
  }


}

module.exports = BST;

const driverCode = () => {

  let leftNodeA = new TreeNode(25);
  let rightNodeA = new TreeNode(39);
  let leftParentNode = new TreeNode(33, leftNodeA, rightNodeA);
  
  let leftNodeB = new TreeNode(60);
  let rightNodeB = new TreeNode(78);
  let rightParentNode = new TreeNode(65,leftNodeB,rightNodeB);
  
  let grandParentNode = new TreeNode(52, leftParentNode, rightParentNode);
  
  // grandParentNode.printNode();
  
  myBST =  new BST(grandParentNode);
  // myBST.printBST();
  console.log(`\n\n${myBST.findNode(52)}`);

}

driverCode();

// leftNodeA.printNode();