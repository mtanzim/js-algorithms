/* Notes
Assumes 0th position is NOT NULL
left child:   2i+1
right child:  2i + 2
parent:       math.floor( (i - 1) /  2 )

*/

const MaxHeap = require('./Heap');
const fixHeapUpFunc = require('./fixHeapUp');


const testHeapPropFunc = require('./testHeapProperty');
// implement a max heap
class MinHeap extends MaxHeap {
  constructor() {
    super();
    this.fixHeapUp = fixHeapUpFunc(false);
  }

  testHeapProp(isDebug = false) {
    return testHeapPropFunc(this.heapData, false, isDebug);
  }


}

module.exports = MinHeap;