class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.leftChild = left;
    this.rightChild = right;
  }

  findNode(input, curNode) {
    if (curNode === null) return null;
    // note how a return of the functions is necessary to move it up the stack
    else if (input < curNode.data) return this.findNode(input, curNode.leftChild);
    else if (input > curNode.data) return this.findNode(input, curNode.rightChild);
    else {
      // curNode.printNode();
      return curNode.data;
    }
  }

  insertNode(input) {
    if (input >= this.data) {
      if (this.rightChild === null) {
        this.rightChild = new TreeNode(input);
      } else {
        return this.rightChild.insertNode(input)
      }
    } else {
      if (this.leftChild === null) {
        this.leftChild = new TreeNode(input);
      } else {
        return this.leftChild.insertNode(input);
      }
    }
  }

  printNode() {
    console.log(JSON.stringify(this, null, 2));
  }

  printNodeData() {
    console.log(this.data);
  }


}

module.exports = TreeNode;