class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.leftChild = left;
    this.rightChild = right;
  }

  updateRoot(node) {
    if (node){
      this.data = node.data;
      this.leftChild = node.leftChild ;
      this.rightChild = node.rightChild;
    } else {
      console.log('Nulling tree!');
      this.data = null;
      this.leftChild = null ;
      this.rightChild = null;
    }
  }

  findNode(input, curNode, parent = null, isLeftChild = false) {

    if (curNode === null) return null;
    // note how a return of the functions is necessary to move it up the stack
    else if (input < curNode.data) return this.findNode(input, curNode.leftChild, curNode, true);
    else if (input > curNode.data) return this.findNode(input, curNode.rightChild, curNode, false);
    else {
      // curNode.printNode();
      return { node: curNode, parent: parent, isLeftChild: isLeftChild };
    }
  }

  findMinNode(curNode, parent = null) {
    if (curNode.leftChild === null) {
      return { node: curNode, parent: parent, isLeftChild: true };
    } else {
      return this.findMinNode(curNode.leftChild, curNode);
    }
  }
  findMaxNode(curNode, parent = null) {
    if (curNode.rightChild === null) {
      return { node: curNode, parent: parent, isLeftChild: false };
    } else {
      return this.findMaxNode(curNode.rightChild, curNode);
    }
  }



  deleteNode(input, startNode) {
    let nodeToDel = this.findNode(input, startNode);
    if (nodeToDel.node) {
      console.log(`Deleting ${nodeToDel.node.data}`);
      // case 1: leaf node
      if (nodeToDel.node.leftChild === null && nodeToDel.node.rightChild === null && nodeToDel.parent !== null) {
        nodeToDel.isLeftChild ? nodeToDel.parent.leftChild = null : nodeToDel.parent.rightChild = null;
        // node only has a left child
      } else if (nodeToDel.node.rightChild === null) {
        // node is the root
        if (nodeToDel.parent === null) {
          nodeToDel.node.leftChild ? this.updateRoot(nodeToDel.node.leftChild) : this.updateRoot(null);
        } else {
          // console.log(`Deleting ${nodeToDel.node.data}`);
          nodeToDel.isLeftChild ? nodeToDel.parent.leftChild = nodeToDel.node.leftChild : nodeToDel.parent.rightChild = nodeToDel.node.leftChild;
          // nodeToDel.parent.leftChild = nodeToDel.node.leftChild;
        }
        // node only has a right child 
      } else if (nodeToDel.node.leftChild === null) {
        // it's a root node
        if (nodeToDel.parent === null) {
          this.updateRoot(nodeToDel.node.rightChild);
        } else {
          nodeToDel.isLeftChild ? nodeToDel.parent.leftChild = nodeToDel.node.rightChild : nodeToDel.parent.rightChild = nodeToDel.node.rightChild;
        }
        // node has 2 children 
      } else {

        let successorNode = this.findMinNode(nodeToDel.node.rightChild, nodeToDel.node || null);
        console.log(`successor: ${successorNode.node.data}`);
        console.log(`node's parent: ${nodeToDel.parent ? nodeToDel.parent.data : 'no parent'}`);
        // console.log('Node to delete!!!!!!!!');
        // console.log(nodeToDel.node);
        // console.log('Successor Node');
        // console.log(successorNode.node);

        // modify left child of successor, it can't have a left child by definition
        successorNode.node.leftChild = nodeToDel.node.leftChild;

        //modify the right child of successor
        if (successorNode.node.rightChild) nodeToDel.leftChild = successorNode.node.rightChild;
        if (successorNode.node !== nodeToDel.node.rightChild) {
          successorNode.node.rightChild = nodeToDel.node.rightChild;
        }
        
        // sever succesor nodes connection to its past parent
        successorNode.isLeftChild ? successorNode.parent.leftChild = null : successorNode.parent.rightChild = null;
        // node is the root
        if (nodeToDel.parent === null) {
          this.updateRoot(successorNode.node);
        } else {
          nodeToDel.isLeftChild ? nodeToDel.parent.leftChild = successorNode.node : nodeToDel.parent.rightChild = successorNode.node;
        }
      }
      console.log(`\nAfter Delete:`)
      console.log(JSON.stringify(this, null, 2));
      console.log(`END\n`)
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