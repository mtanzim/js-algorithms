module.exports = function testHeapProp(heapData, isMaxHeap, isDebug = false) {
    // check max val at root
  if(isDebug) console.log(`MaxHeap: ${isMaxHeap}`);
  if(isDebug) console.log(`heap now: [ ${heapData} ]`);
  let rootVal = heapData[0];
  if(isDebug) console.log(`rootval is ${rootVal}`);
  
  for (let i = 1; i < heapData.length; i++) {
    if (isMaxHeap) {
      //rootval is the max
      if (isDebug) console.log(`node ${i} is larger: ${heapData[i] > rootVal}`);
      if (heapData[i] > rootVal) return false;
    }
    else {
      if (isDebug) console.log(`node ${i} is smaller: ${heapData[i] < rootVal}`);
      if (heapData[i] < rootVal) return false;
    }
  }

  // check left children are smaller
  for (let j = 0; 2 * j + 1 < heapData.length; j++) {
    if (isDebug) console.log(`testing left child: ${heapData[2 * j + 1]} of ${heapData[j]}`);
    if (isMaxHeap){
      //children are lesser than parents
      if (heapData[j] < heapData[2 * j + 1]) return false;
    } else {   
      if (heapData[j] > heapData[2 * j + 1]) return false;
    }
  }

  // check right children are smaller
  for (let j = 0; 2 * j + 2 < heapData.length; j++) {
    if (isDebug) console.log(`testing right child: ${heapData[2 * j + 2]} of ${heapData[j]}`);
    if(isMaxHeap) {
      if (heapData[j] < heapData[2 * j + 2]) return false;
    } else {
      if (heapData[j] > heapData[2 * j + 2]) return false;
    }
  }

  return true;
};