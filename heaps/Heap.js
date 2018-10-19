// @ts-check
const testHeapPropFunc = require('./testHeapProperty');
const fixHeapUpFunc = require('./fixHeapUp');
const fixHeapDownFunc = require('./fixHeapDown');
const findParentIdFunc = require('./findParentId');
const updateHeap = require('./updateHeap');

/* Notes
Assumes 0th position is NOT NULL
left child:   2i+1
right child:  2i + 2
parent:       math.floor( (i - 1) /  2 )
*/

// implement a heap based on constructor input
class Heap {
  constructor(isMaxHeap) {

    this.heapData = [];
    this.fixHeapUp = fixHeapUpFunc(isMaxHeap);
    this.findParentId = findParentIdFunc;
    this.fixHeapDown = fixHeapDownFunc(isMaxHeap);
    this.updateMemberHigher = updateHeap(isMaxHeap);
    this.testHeapPropFuncHigher = testHeapPropFunc(isMaxHeap);

    // console.log(`\nInstantiated a ${isMaxHeap ? 'maxHeap' : 'minHeap'}\n`);
  }

  printHeap() {
    // console.log(this);
    console.log(this.heapData);
  }

  getLength() {
    return this.heapData.length;
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

  updateMember(index, newVal, isDebug = false) {
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
    return this.testHeapPropFuncHigher(this.heapData, isDebug);
  }

  popHeap() {
    // this.heapData.pop();
  }

  deleteRoot(isDebug = false) {
    let oldRoot = this.heapData[0];
    if (isDebug) console.log(`\nstarting delete with: [ ${this.heapData} ]`);
    //remove first element
    // bring last element as the root
    if (this.getLength () === 1) {
      this.heapData = [];
      return oldRoot;
    }
    else if (this.heapData.length > 1) {
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