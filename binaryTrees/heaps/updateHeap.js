// @ts-check
const fixHeapUp = require('./fixHeapUp');
const fixHeapDown = require('./fixHeapDown');

module.exports = (isMaxHeap) => function updateHeap(heapData, index, newVal, isDebug = false) {

  if (isDebug) console.log(`updating index: ${index} with newVal: ${newVal}, oldVal: ${heapData[index]}`);
  if (!heapData[index]) {
    throw new Error('Please provide a valid index');
  }

  let oldVal = heapData[index];
  if (isDebug) console.log(`before swap: [ ${heapData} ]`);
  heapData[index] = newVal;

  if (isDebug) console.log(`after swap: [ ${heapData} ]`);

  let heapUpdateCond = Boolean(newVal < oldVal);
  if (isMaxHeap) heapUpdateCond = Boolean(newVal > oldVal);

  if (heapUpdateCond) {
    if (isDebug) console.log('fixing up');
    // heapData.splice(0, index+1, ...this.fixHeapUp(heapData.slice(0, index+1), isDebug));
    heapData = fixHeapUp(isMaxHeap)(heapData, index, isDebug)
  } else {
    if (isDebug) console.log('fixing down');
    // heapData.splice(index, heapData.length, ...this.fixHeapDown(heapData.slice(index, heapData.length), isDebug));
    heapData = fixHeapDown(isMaxHeap)(heapData, index, isDebug);
  }

};