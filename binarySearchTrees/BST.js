class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    if (left) this.leftChild = left;
    if (right) this.rightChild = right;
  }

  printNode () {
    console.log(JSON.stringify(this, null, 2));
  }
}

let leftNodeA = new TreeNode(25);
let rightNodeA = new TreeNode(39);
let leftParentNode = new TreeNode(33, leftNodeA, rightNodeA);

let leftNodeB = new TreeNode(60);
let rightNodeB = new TreeNode(78);
let rightParentNode = new TreeNode(65,leftNodeB,rightNodeB);

let grandParentNode = new TreeNode(52, leftParentNode, rightParentNode);

grandParentNode.printNode();
// leftNodeA.printNode();