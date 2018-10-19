
const findParentId = require('./findParentId');
module.exports = (isMaxHeap) => function fixHeapUp(heap, startIndex, isDebug = false) {
  // isDebug = true;

  if (isDebug) console.log(`fixing heap up on [ ${heap} ]`)
  if (isDebug) console.log(`maxHeap: ${isMaxHeap}`)
  // heap contains 1 or more elements
  if (heap.length > 1) {
    let curIndex = startIndex;
    let parentIndex = findParentId(curIndex);

    const swap = () => {
      // es6 destructuring: swap with parent
      // if (heap[curIndex] > heap[parentIndex]){
      if (isDebug) console.log(`need to swap parent: ${heap[parentIndex]} with new: ${heap[curIndex]}`);
      [heap[parentIndex], heap[curIndex]] = [heap[curIndex], heap[parentIndex]];
      // }
      // go to parent index and reiterate
      curIndex = parentIndex;
      parentIndex = findParentId(curIndex);
    }

    if (isDebug) console.log(`current idx: ${curIndex}`);
    if (isDebug) console.log(`parent idx: ${parentIndex}`);
    // while the child is larger than the parent

    if (isMaxHeap) {
      while (heap[curIndex] > heap[parentIndex] && parentIndex >= 0) {
        swap();
      }
    } else {
      while (heap[curIndex] < heap[parentIndex] && parentIndex >= 0) {
        swap();
      }
    }
  }


  if (isDebug) console.log(`after fixing heap: [ ${heap} ]`)
  return heap;
};