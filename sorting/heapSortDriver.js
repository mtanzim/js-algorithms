const Heap = require('../binaryTrees/heaps/Heap');
const testSorted = require('./testSorted');
const unsortedArrs = require('./arrCollection');

const heapSort = function (arr) {
  let heap = new Heap();
  heap.buildHeap(arr);
  return heap.sortHeap(false);
}

module.exports = heapSort;

function driver() {
  unsortedArrs
    // .filter( (a,i) => i === 1 )
    .forEach(arr => {
      console.log(`Sorting [ ${arr} ]`);
      arr = heapSort(arr);
      console.log(`Sorted [ ${arr} ]`);
      console.log(`isSorted: ${testSorted(arr) ? 'YES' : 'NO'}`);
    });
}

// driver();