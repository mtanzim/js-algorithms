class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // time complexity of O(1); not affected by list size
  addToHead(data) {
    const newNode = { data };
    // make new node point to where the head is point
    // NOTE: ordering is extremely important here
    // Otherwise, the link of the current HEAD will be LOST!!!
    newNode.next = this.head;
    // make the head point to the new node
    this.head = newNode;
    this.length++;
  }

  getHead() {
    return this.head;
  }

  isSorted() {
    // empty LL or LL with 1 element is sorted
    if (this.head === null || this.head.next === null) return true;
    let currentNode = this.head;
    do {
      if (currentNode.data > currentNode.next.data) return false;
      currentNode = currentNode.next;
    } while (currentNode.next !== null);
    return true;
  }

  // work on simplifying this algorithm
  sortAndAdd(data) {
    // console.log(`\ninserting ${data}`);

    if (!this.isSorted()) throw new Error('Cannot operate on unsorted LL!');

    const newNode = { data };
    // for empty LL
    if (this.head === null) {
      this.addToHead(data);
      return 0;
    }
    let currentNode = this.head;

    do {

      // already at the end of the LL, insert at tail
      if (currentNode.next === null) {
        newNode.next = null;
        currentNode.next = newNode;
        this.length++;
        break;
      }
      // when adding to head is needed
      // console.log(`Current value is ${currentNode.data}`);
      if (newNode.data > currentNode.next.data) {
        currentNode = currentNode.next;
      } else {
        if (currentNode === this.head && newNode.data < currentNode.data) {
          this.addToHead(data);
          break;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
        break;
      }

    } while (currentNode !== null);

    return 0;

  }

  removeFromHead() {
    // simply make the head bypass the first node, and point to the next node
    // also O(1) operation
    if (this.head === null) throw new Error('Linked List empty!');
    this.head = this.head.next;
    this.length--;
  }

  findItem(value) {
    let counter = 0;
    let currentNode = this.head;

    do {
      if (currentNode.data === value) return `${value} found on ${counter}th node`;
      currentNode = currentNode.next;
      counter++;
    } while (currentNode !== null);
    return `${value} not found!`;
  }

  findLength() {
    return this.length;

  }

  static findAnyLength (currentNode) {
    let _length = 0;
    // let currentNode = this.head;
    do {
      _length++;
      currentNode = currentNode.next;

    } while (currentNode !== null);
    // console.log(`Travsersed length is ${_length}`);

    return _length;
  }

  arrToLL(arr) {
    for (let item of arr.reverse()) {
      this.addToHead(item);
    }
  }

  static getLinkedListAsArr(curNode = this.head) {
    let arr = [];
    // let curNode = this.head;
    while (curNode !== null) {
      arr.push(curNode.data);
      curNode = curNode.next;
    }

    // console.log(arr);
    return arr;
  }

  printLinkedList() {
    console.log(JSON.stringify(this, null, 2));
  }
}

module.exports = LinkedList;

function sortedAddLL() {

  let linkedList = new LinkedList();
  const arrForLL = [0, 9, 3, 6, 10, 100, -1, -5, 200];
  arrForLL.forEach(val => {
    linkedList.sortAndAdd(val);
  });
  linkedList.printLinkedList();
  console.log(`SORTED: ${linkedList.isSorted()}`);

  // add to LL again with add to head instead
  console.log('Now adding to HEAD!');
  arrForLL.forEach(val => linkedList.addToHead(val));
  //LL should now be not sorted
  console.log(`SORTED: ${linkedList.isSorted()}`);

  // attempt to insertion sort to already unsorted LL
  // arrForLL.forEach(val => linkedList.sortAndAdd(val));

}

// tester code
function unsortedLLTests() {
  let linkedList = new LinkedList();
  const arrForLL = [5, 6, 7, 8];
  // add to head
  arrForLL.forEach(val => linkedList.addToHead(val));
  linkedList.printLinkedList();

  // traverse LL
  linkedList.findLength();

  // find each item
  arrForLL.forEach(val => console.log(linkedList.findItem(val)));

  // remove items from head
  linkedList.removeFromHead();
  linkedList.removeFromHead();
  linkedList.printLinkedList();
  linkedList.findLength();

  // find again
  arrForLL.forEach(val => console.log(linkedList.findItem(val)));

  // attempt to eror out by deleting from empty LL

  /*   linkedList.removeFromHead();
    linkedList.printLinkedList();
    linkedList.removeFromHead();
    linkedList.printLinkedList();
    linkedList.removeFromHead();
    linkedList.printLinkedList();
    linkedList.removeFromHead();
    linkedList.printLinkedList();
    linkedList.removeFromHead();
    linkedList.printLinkedList(); */
}

// unsortedLLTests();
// sortedAddLL();


