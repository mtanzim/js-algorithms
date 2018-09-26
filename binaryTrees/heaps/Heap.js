// const unsortedArrs = require('../../sorting/arrCollection');
// const HeapNode = require('./heapNode');

/* Notes
  Assumes 0th position is NOT NULL
  left child:   2i+1
  right child:  2i + 2
  parent:       (i - 1) /  2 

*/

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

  testHeapProp () {
    // check max val at root
    let maxVal = this.heapData[0];
    for (let i = 1; i < this.heapData.length; i++){
      if (this.heapData[i] > maxVal) return false;
    }
    
    // check left children are smaller
    for (let j = 0; 2 * j + 1 <= this.heapData.length; j ++ ) {
      // console.log (`testing left child of ${this.heapData[j]}`);
      if (this.heapData[j] < this.heapData[2 * j + 1] ) return false;
    }
    
    // check right children are smaller
    for (let j = 0; 2 * j + 2 <= this.heapData.length; j++) {
      // console.log(`testing right child of ${this.heapData[j]}`);
      if (this.heapData[j] < this.heapData[2 * j + 2]) return false;
    }

    return true;
  }


  deleteNode(input) {
    console.log(`Will delete node!`);
  }

  findParentId (childId) {
    return Math.floor((childId - 1) / 2);
  }
  
  insertNode(input) {
    this.heapData.push(input);
    console.log (`\ninserrting ${input}`)
    console.log(`start heap: [ ${this.heapData} ]`)
    
    // heap contains 1 or more elements
    if (this.heapData.length > 1) {
      let curIndex = this.heapData.length - 1;
      let parentIndex = this.findParentId(curIndex);
      
      console.log(`current idx: ${curIndex}`);
      console.log(`parent idx: ${parentIndex}`);
      // while the child is larger than the parent
      
      while (this.heapData[curIndex] > this.heapData[parentIndex] && parentIndex >= 0) {
        // es6 destructuring: swap with parent
        // if (this.heapData[curIndex] > this.heapData[parentIndex]){
          console.log (`need to swap parent: ${this.heapData[parentIndex]} with new: ${this.heapData[curIndex]}`);
          [this.heapData[parentIndex], this.heapData[curIndex]] = [this.heapData[curIndex], this.heapData[parentIndex]];
        // }
        // go to parent index and reiterate
        curIndex = parentIndex;
        parentIndex = this.findParentId(curIndex);
      }
      
    }
    console.log(`end heap: [ ${this.heapData} ]`)
  }
}

function driver() {

  let heap = new Heap();
  [9,5,10,17,13,20,11,15,8,19].forEach (a => heap.insertNode(a));
  heap.printHeap();
  console.log(`isHeap: ${heap.testHeapProp()}`);

}

driver();