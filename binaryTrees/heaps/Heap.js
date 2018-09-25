// const unsortedArrs = require('../../sorting/arrCollection');
// const HeapNode = require('./heapNode');

/* Notes

  left child:   i * 2
  right child:  i * 2 + 1
  parent:       Math.floor(i / 2) 

*/

// implement a max heap
class Heap {
  constructor() {
    // leave heap index 0 as null ? Why?
    this.heapData = [];
    // this.heapData = [null];
  }
  printHeap() {
    // console.log(this);
    console.log(this.heapData);
  }


  deleteNode(input) {
    console.log(`Will delete node!`);
  }
  
  insertNode(input) {
    this.heapData.push(input);

    // heap contains 1 or more elements
    if (this.heapData.length > 1) {
      let curIndex = this.heapData.length - 1;
      let parentIndex = Math.floor(curIndex / 2);
      // while the child is larger than the parent

      while (this.heapData[curIndex] > this.heapData[parentIndex] && parentIndex >= 0) {
        // es6 destructuring: swap with parent
        [this.heapData[parentIndex], this.heapData[curIndex]] = [this.heapData[curIndex], this.heapData[parentIndex]];
          // go to parent index and reiterate
        curIndex = parentIndex;
        parentIndex = Math.floor(curIndex / 2);
      }

    }
  }
}

function driver() {

  let heap = new Heap();
  [8,3,5,7,2,15,17,19].forEach (a => heap.insertNode(a));
  heap.printHeap();

}

driver();