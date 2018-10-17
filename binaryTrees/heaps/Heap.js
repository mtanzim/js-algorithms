const testHeapPropFunc = require('./testHeapProperty');
const fixHeapUpFunc = require('./fixHeapUp');
const findParentIdFunc = require('./findParentId');



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
    //boolean argument is isMax
    return testHeapPropFunc(this.heapData, true, isDebug);
  }
  
/*   testHeapProp(isDebug = false) {
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
  } */


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

/*   findParentId(childId) {
    return Math.floor((childId - 1) / 2);
  } */

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

/*   fixHeapUp(heap, startIndex, this.findParentId, isDebug = false) {
    return fixHeapUpFunc(heap, startIndex, isDebug = false);
  } */

/*   fixHeapUp(heap, startIndex, isDebug = false ) {
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
  } */


}

module.exports = Heap;

