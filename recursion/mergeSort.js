// const unsortedArr = [12, 11, 9, 5, 4, 2, 1];
const testSorted = require('../basicSorting/testSorted');
const unsortedArrs = require('../basicSorting/arrCollection');


const merge = function (arr, start, middle, end) {
  console.log('Doing nothing for now!');
}

const mergeSort = function (origArr, start, end, type = 'merge') {


  let middle = Math.floor((start + end) / 2);

  if (start < end){
    mergeSort(origArr, start, middle);
    mergeSort(origArr, middle + 1, end);
    merge(origArr, start, middle, end);
  }

  console.log(`Applying ${type} sort with start: ${start}, end: ${end}, middle: ${middle}`);

  return [0, 0];

  // return (testSorted(arr) ? arr : new Error('Not sorted!'));
}
// use when running code by
unsortedArrs.forEach(unsortedArr => {
  console.log(`\nInitial array is ${unsortedArr}`);
  let sortedArr = [].concat(mergeSort(unsortedArr, 0, unsortedArr.length - 1));
  console.log(`sorted array is ${sortedArr}`);
  // console.log(`confirm sorted ${testSorted(sortedArr)}\n`);
});

module.exports = mergeSort;
