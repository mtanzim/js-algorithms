const testSorted = require('./testSorted');
const unsortedArrs = require('./arrCollection');
const bubbleSort = require('./bubbleSort');
const insertionSort = require('./insertionSort');
const mergeSort = require('./mergeSort');
const quickSort = require('./quickSort');
const heapSort = require('./heapSortDriver');

const genHarr = function (arrLength) {
  let hArr = [];
  let h = 1;
  while (h < arrLength) {
    hArr.push(h);
    h = 3 * h + 1;
  }
  return hArr.reverse();
};

const shellSort = function (arr, isBubble = true) {

  let hArr = genHarr(arr.length);
  // console.log(`Knuth array: [ ${hArr} ]`);

  hArr
    // .filter((a,i) => i < 2 )
    .forEach(intervalGap => {
      // console.log(`\ninterval gap: ${intervalGap}`);
      for (let i = 0; i < intervalGap; i += 1) {
        // console.log(`\npass ${i}`);
        // console.log(`starting arr [${arr}]`);

        let tempArr = [];
        let tempPos = [];

        for (let j = i; j < arr.length; j += intervalGap) {
          // console.log(`operating on index ${j} with value ${arr[j]}`);
          tempArr.push(arr[j]);
          tempPos.push(j);
        }

        // console.log(`unsorted Temp Arr: ${tempArr}`);
        // console.log(`positions Arr: ${tempPos}`);

        let sortedTempArr = [];
        sortedTempArr = !testSorted(tempArr) ? heapSort(tempArr) : tempArr;
        // sortedTempArr = !testSorted(tempArr) ? insertionSort(tempArr) : tempArr;
        // sortedTempArr = !testSorted(tempArr) ? mergeSort(tempArr) : tempArr;
        // sortedTempArr = !testSorted(tempArr) ? quickSort(tempArr) : tempArr;
        // sortedTempArr = !testSorted(tempArr) ? bubbleSort(tempArr) : tempArr;

        // console.log(`sorted Temp Arr: ${sortedTempArr}`);

        tempPos.reverse().forEach(k => {
          let newVal = sortedTempArr.pop();
          // console.log(`placing ${newVal} in position ${k}`);
          arr[k] = newVal;

        });
        // console.log(`updated main Arr: ${arr}`);
      }
    });
  return arr;
};


function driver() {
  unsortedArrs
    // .filter( (a,i) => i === 1)
    .forEach(arr => {
      console.log(`\nSorting [ ${arr} ]`);
      let sortedArr = shellSort(arr, 0, arr.length - 1);
      console.log(`Sorted [ ${sortedArr} ]`);
      console.log(`isSorted: ${testSorted(sortedArr)}`);
    });
}

driver();