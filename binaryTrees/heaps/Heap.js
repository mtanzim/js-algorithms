// @ts-check

const testHeapPropFunc = require('./testHeapProperty');
const fixHeapUpFunc = require('./fixHeapUp');
const fixHeapDown = require('./fixHeapDown');
const findParentIdFunc = require('./findParentId');
const updateHeap =  require('./updateHeap');

/* Notes
Assumes 0th position is NOT NULL
left child:   2i+1
right child:  2i + 2
parent:       math.floor( (i - 1) /  2 )
*/

// implement a max heap
class Heap {
  constructor() {

    this.heapData = [];
    this.fixHeapUp = fixHeapUpFunc(true);
    this.findParentId = findParentIdFunc;
    this.fixHeapDown = fixHeapDown(true);
    this.updateMemberHigher = updateHeap(true);
  }
  printHeap() {
    // console.log(this);
    console.log(this.heapData);
  }

  heapToArray() {
    return this.heapData;
  }

  insertNode(input, isDebug = false) {
    this.heapData.push(input);
    if (isDebug) console.log(`\ninserrting ${input}`);
    if (isDebug) console.log(`start heap: [ ${this.heapData} ]`);
    this.heapData = this.fixHeapUp([].concat(this.heapData), this.heapData.length - 1, isDebug);
    if (isDebug) console.log(`end heap: [ ${this.heapData} ]`);
  }

  buildHeap(arr) {
    arr.forEach(a => this.insertNode(a));
  }

  updateMember (index, newVal, isDebug = false) {
    this.updateMemberHigher(this.heapData, index, newVal, isDebug);
  }

  sortHeap(isDebug = false) {

    let newHeap = [].concat(this.heapData);

    if (isDebug) console.log(`\nsorting heap: [ ${newHeap}]`);
    let n = newHeap.length - 1;

    while (n > 0) {
      [newHeap[0], newHeap[n]] = [newHeap[n], newHeap[0]];
      if (isDebug) console.log(`after swap: [ ${newHeap}]`);
      newHeap.splice(0, n, ...this.fixHeapDown(newHeap.slice(0, n), 0, false));
      if (isDebug) console.log(`after fix: [ ${newHeap}]`);
      n--;
    }

    return newHeap;

  }

  testHeapProp(isDebug = false) {
    //boolean argument is isMax
    return testHeapPropFunc(this.heapData, true, isDebug);
  }

  deleteRoot(isDebug = false) {
    let oldRoot = this.heapData[0];
    if (isDebug) console.log(`\nstarting delete with: [ ${this.heapData} ]`);
    //remove first element
    // bring last element as the root
    if (this.heapData.length > 0) {
      this.heapData[0] = this.heapData.pop();
      if (isDebug) console.log(`after moving root: [ ${this.heapData} ]`);
      this.heapData = this.fixHeapDown([].concat(this.heapData), 0, isDebug);
    } else {
      throw new Error('Empty Heap!');
    }
    return oldRoot;

  }

}

module.exports = Heap;

