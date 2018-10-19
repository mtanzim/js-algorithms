  module.exports = (isMaxHeap) => function fixHeapDown(heap, startIndex, isDebug = false) {

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

      let RCUPdateCondL1 = Boolean(heap[i] < heap[leftChildIdx] || heap[i] < heap[rightChildIdx]);
      let RCUPdateCondL2 = Boolean(heap[rightChildIdx] > heap[leftChildIdx]);
      let LCUpdateCond = Boolean(heap[leftChildIdx] > heap[i]);

      if (!isMaxHeap) {
        RCUPdateCondL1 = Boolean(heap[i] > heap[leftChildIdx] || heap[i] > heap[rightChildIdx]);
        RCUPdateCondL2 = Boolean(heap[rightChildIdx] < heap[leftChildIdx]);
        LCUpdateCond = Boolean(heap[leftChildIdx] < heap[i]);
      }
      
      // both children exist
      if (rightChildIdx < heap.length) {
        if (isDebug) console.log('both children exist!');
        // parent is less than either child
        if (RCUPdateCondL1) {
          if (RCUPdateCondL2) {
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
        if (LCUpdateCond) {
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
  };

