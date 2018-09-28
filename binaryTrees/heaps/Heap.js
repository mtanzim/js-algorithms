/* Notes
Assumes 0th position is NOT NULL
left child:   2i+1
right child:  2i + 2
parent:       math.floor( (i - 1) /  2 )

*/

const testSorted = require('../../sorting/testSorted');
const unsortedArrs = require('../../sorting/arrCollection');

// implement a max heap
class Heap {
  constructor() {

    this.heapData = [];
    // this.heapData = [null];
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

    if (isDebug) console.log(`updating index: ${index} with newVal: ${newVal}, oldVal: ${this.heapData[index]}`);
    if (!this.heapData[index]) {
      throw new Error('Please provide a valid index');
    } 
    
    let oldVal = this.heapData[index];
    if (isDebug) console.log(`before swap: [ ${this.heapData} ]`);
    this.heapData[index] = newVal;
    
    if (isDebug) console.log(`after swap: [ ${this.heapData} ]`);

    if (newVal > oldVal) {
      if (isDebug) console.log('fixing up');
      // this.heapData.splice(0, index+1, ...this.fixHeapUp(this.heapData.slice(0, index+1), isDebug));
      this.heapData = this.fixHeapUp(this.heapData, index, isDebug)
    } else {
      if (isDebug) console.log('fixing down');
      // this.heapData.splice(index, this.heapData.length, ...this.fixHeapDown(this.heapData.slice(index, this.heapData.length), isDebug));
      this.heapData = this.fixHeapDown(this.heapData, index, isDebug);
    }

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
    // check max val at root
    let maxVal = this.heapData[0];
    for (let i = 1; i < this.heapData.length; i++) {
      if (this.heapData[i] > maxVal) return false;
    }

    // check left children are smaller
    for (let j = 0; 2 * j + 1 < this.heapData.length; j++) {
      if (isDebug) console.log (`testing left child: ${this.heapData[2 * j + 1]} of ${this.heapData[j]}`);
      if (this.heapData[j] < this.heapData[2 * j + 1]) return false;
    }

    // check right children are smaller
    for (let j = 0; 2 * j + 2 < this.heapData.length; j++) {
      if (isDebug) console.log(`testing right child: ${this.heapData[2 * j + 2]} of ${this.heapData[j]}`);
      if (this.heapData[j] < this.heapData[2 * j + 2]) return false;
    }

    return true;
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

  findParentId(childId) {
    return Math.floor((childId - 1) / 2);
  }

  // this algorithm needs refactoring!!!
  fixHeapDown(heap, startIndex, isDebug = false) {

    if (isDebug) console.log(`heap to fix: [ ${heap}]`);
    
    let i = startIndex;
    while (i < heap.length) {
      let leftChildIdx = 2 * i + 1;
      let rightChildIdx = leftChildIdx + 1;
      // let temp = this.heapData[i];
      
      if (isDebug) console.log(`\nheap length: ${heap.length}`);
      if (isDebug) console.log(`Checking index: ${i} with value: ${heap[i]}`);
      if (isDebug) console.log(`Checking left child index: ${leftChildIdx} with value: ${heap[leftChildIdx]}`);
      if (isDebug) console.log(`Checking right child index: ${rightChildIdx} with value: ${heap[rightChildIdx]}`);
      
      // both children exist
      if (rightChildIdx < heap.length) {
        if (isDebug) console.log('both children exist!');
        // parent is less than either child
        if (heap[i] < heap[leftChildIdx] || heap[i] < heap[rightChildIdx]) {
          if (heap[rightChildIdx] > heap[leftChildIdx]) {
            if (isDebug) console.log(`need to swap parent: ${heap[i]} with right child: ${heap[rightChildIdx]}`);
            [heap[i], heap[rightChildIdx]] = [heap[rightChildIdx], heap[i]];
            i = rightChildIdx;
          } else {
            if (isDebug) console.log(`need to swap parent: ${heap[i]} with left child: ${heap[leftChildIdx]}`);
            [heap[i], heap[leftChildIdx]] = [heap[leftChildIdx], heap[i]];
            i = leftChildIdx;
          }
        } else {
          break;
        }
        // only left child exists 
      } else if (leftChildIdx < heap.length) {
        if (isDebug) console.log('only left child exists!');
        if (heap[leftChildIdx] > heap[i]) {
          if (isDebug) console.log(`need to swap parent: ${heap[i]} with left child: ${heap[leftChildIdx]}`);
          [heap[i], heap[leftChildIdx]] = [heap[leftChildIdx], heap[i]];
          // i = leftChildIdx;
        }
        break;
      } else {
        if (isDebug) console.log('Do not do anything');
        break;
        // i = this.heapData.length;
      }
    }
    
    if (isDebug) console.log(`heap fixed down: [ ${heap}]`);
    return heap;
  }

  fixHeapUp(heap, startIndex, isDebug = false ) {
    if (isDebug) console.log (`fixing heap up on [ ${heap} ]`)
    // heap contains 1 or more elements
    if (heap.length > 1) {
      let curIndex = startIndex;
      let parentIndex = this.findParentId(curIndex);
      
      if (isDebug) console.log(`current idx: ${curIndex}`);
      if (isDebug) console.log(`parent idx: ${parentIndex}`);
      // while the child is larger than the parent
      
      while (heap[curIndex] > heap[parentIndex] && parentIndex >= 0) {
        // es6 destructuring: swap with parent
        // if (heap[curIndex] > heap[parentIndex]){
          if (isDebug) console.log(`need to swap parent: ${heap[parentIndex]} with new: ${heap[curIndex]}`);
          [heap[parentIndex], heap[curIndex]] = [heap[curIndex], heap[parentIndex]];
          // }
          // go to parent index and reiterate
          curIndex = parentIndex;
          parentIndex = this.findParentId(curIndex);
        }
      }
      
      
    if (isDebug) console.log (`after fixing heap: [ ${heap} ]`)
    return heap;
  }


}

module.exports = Heap;

function driver() {


  unsortedArrs
  .filter ( (a,i) => i === 0)
  .forEach(A => {

    console.log(`\n=========================================\n`)
    console.log(`\nBuilding heap with [ ${A} ]`);
    let heap = new Heap();
    heap.buildHeap(A);
    // A.forEach(a => heap.insertNode(a));
    heap.printHeap();
    
    // update key test
    console.log(`\nTesting priority change with [ ${heap.heapToArray()} ]`);
    // console.log(`Array length: ${A.length}`);
    // console.log(`Heap data length: ${heap.heapToArray().length} `);
    let expectedLen = A.length;

    heap.heapToArray().forEach( (a,i) => {
      let newVal = a + 100;
      let isDebug = false;

      console.log(`\nchanging value: ${heap.heapToArray()[i]} of index: ${i} with ${newVal} `);
      heap.updateMember(i, newVal, isDebug);
      heap.printHeap();
      if (heap.testHeapProp() && heap.heapToArray().length === expectedLen) console.log(`isHeap: ${heap.testHeapProp()}`);
      else throw new Error('NOT HEAP!');
      newVal -= 200;
      console.log (`\nchanging value: ${heap.heapToArray()[i]} of index: ${i} with ${newVal} `);
      heap.updateMember(i, newVal, isDebug);
      heap.printHeap();
      if (heap.testHeapProp() && heap.heapToArray().length === expectedLen) console.log(`isHeap: ${heap.testHeapProp()}`);
      else throw new Error('NOT HEAP!');
    });

    // console.log(`\nUpdating heap index ${updateIdx} with ${newVal}`);


    if (heap.testHeapProp()) console.log(`isHeap: ${heap.testHeapProp()}`);
    else throw new Error('NOT HEAP!');
    
    console.log(`\nTesting root removal`);
    let startLen = heap.heapToArray().length;
    for (let i = 0; i < Math.floor(startLen / 2); i++) {
      let isDebug = false;
      // if (i === startLen - 3) isDebug = true;
      console.log(`Removed root: ${heap.deleteRoot(isDebug)}`);
      heap.printHeap();
      if (heap.testHeapProp()) console.log(`isHeap: ${heap.testHeapProp()}`);
      else throw new Error('NOT HEAP!');
    }

    let sortedHeap = heap.sortHeap();
    console.log(`\nsorted heap is [ ${sortedHeap} ]`);
    if (testSorted(sortedHeap)) console.log(`SORTED: ${testSorted(sortedHeap)}`);
    else throw new Error('NOT SORTED!');

  });

}

driver();