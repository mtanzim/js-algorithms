// @ts-check

const Heap = require('./Heap');
// const Heap = require('./MinHeap');
const testSorted = require('../sorting/testSorted');
const unsortedArrs = require('../sorting/arrCollection');

const driver = function (isMaxHeap) {


  unsortedArrs
    .filter((a, i) => i === 1)
    .forEach(A => {

      console.log(`\n=========================================\n`)
      console.log(`\nBuilding a ${isMaxHeap ? 'maxHeap' : 'minHeap' } with [ ${A} ]`);
      let heap = new Heap(isMaxHeap);
      heap.buildHeap(A);
      // A.forEach(a => heap.insertNode(a));
      heap.printHeap();

      // update key test
      console.log(`\nTesting priority change with [ ${heap.heapToArray()} ]`);
      // console.log(`Array length: ${A.length}`);
      // console.log(`Heap data length: ${heap.heapToArray().length} `);
      let expectedLen = A.length;

      heap.heapToArray().forEach((a, i) => {
        let newVal = a + 100;
        if (!isMaxHeap) newVal -= 200;
        let isDebug = false;

        console.log(`\nchanging value: ${heap.heapToArray()[i]} of index: ${i} with ${newVal} `);
        heap.updateMember(i, newVal, isDebug);
        heap.printHeap();
        if (heap.testHeapProp() && heap.heapToArray().length === expectedLen) console.log(`isHeap: ${heap.testHeapProp()}`);
        else throw new Error('NOT HEAP!');
        newVal -= 200;
        console.log(`\nchanging value: ${heap.heapToArray()[i]} of index: ${i} with ${newVal} `);
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
      if (testSorted(sortedHeap, isMaxHeap)) console.log(`SORTED: ${testSorted(sortedHeap, isMaxHeap)}`);
      else throw new Error('NOT SORTED!');

    });

}

module.exports = driver;

driver(true);
driver(false);