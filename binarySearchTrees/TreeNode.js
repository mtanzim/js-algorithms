class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.leftChild = left;
    this.rightChild = right;
  }

  updateRoot (node) {
    this.data = node.data;
    this.leftChild = node.leftChild;
    this.rightChild = node.rightChild;
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
      // case 1: leaf node
      if (nodeToDel.node.leftChild === null && nodeToDel.node.rightChild === null && nodeToDel.parent !== null) {
        console.log(`Deleting ${nodeToDel.node.data}`);
        nodeToDel.isLeftChild ? nodeToDel.parent.leftChild = null : nodeToDel.parent.rightChild = null;
        // node only has a left child
      } else if (nodeToDel.node.rightChild === null) {
        // node is the root
        if (nodeToDel.parent === null) {
          this.updateRoot(nodeToDel.node.leftChild);
        } else {
          console.log(`Deleting ${nodeToDel.node.data}`);
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
        // console.log('node has 2 children FUU');
        //need to find successor
        let successorNode = this.findMinNode(nodeToDel.node.rightChild, nodeToDel.node || null );
        // console.log(`successor: ${successorNode.node.data}`);
        // console.log('Node to delete!!!!!!!!');
        // console.log(nodeToDel.node);
        // console.log('Successor Node');
        // console.log(successorNode.node);
        // modify left child of successor, it can't have a left child by definition
        successorNode.node.leftChild = nodeToDel.node.leftChild;
        // nodeToDel.node.leftChild = null;
        // modify right child of successor
        // modify connection to the parent to sever node to be deleted
        // node is the root
        if (nodeToDel.parent === null) {
          // console.log ('Trying to delete root node!');
          successorNode.isLeftChild ? successorNode.parent.leftChild = null : successorNode.parent.rightChild = null;
          if (successorNode.node !== nodeToDel.node.rightChild) {
            successorNode.node.rightChild = nodeToDel.node.rightChild;
          }
          if (successorNode.node.rightChild) nodeToDel.leftChild = successorNode.node.rightChild;

          // console.log(`intermediate successor node`)
          // console.log(successorNode.node);
          this.updateRoot(successorNode.node);

          
          // console.log('Final state');
          // console.log (this);
        } else {
          // console.log(!Object.is(successorNode.node.rightChild, nodeToDel.node.rightChild));
          if (successorNode.node.rightChild) successorNode.parent.leftChild = successorNode.node.rightChild;
          if ( successorNode.node !== nodeToDel.node.rightChild){
            successorNode.node.rightChild = nodeToDel.node.rightChild;
          }
          nodeToDel.isLeftChild ? nodeToDel.parent.leftChild = successorNode.node : nodeToDel.parent.rightChild = successorNode.node;
        }

        // sever connection with parent


        // nodeToDel.node =  null;


        // throw new Error('Fuck you node has 2 children so you gotta wait!');
      }
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