const testSorted = require('./testSorted');
const unsortedArrs = require('./arrCollection');

const merge = function (arr, start, middle, end, debug=false) {

  // let n1 = middle - start + 1;
  // let n2 = end - middle;

  // copy to temp arrays
  let left = arr.slice(start, middle + 1);
  let right = arr.slice(middle + 1, end + 1);

  if (debug) {
    console.log(`\narr : [${arr}]`);
    console.log(`start : ${start}`);
    console.log(`middle : ${middle}`);
    console.log(`end : ${end}`);
    console.log(`left : [${left}]`);
    console.log(`right : [${right}]`);
  }

  // if (left.length !== n1 || right.length !== n2) throw new Error('Not correct!!!!');

  let i = 0;
  let j = 0;
  let k = start;


  while (i < left.length && j < right.length) {

    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  } 

  // copy over remainder of left if any 
  while (i < left.length) {
    arr[k] = left[i];
    k ++;
    i ++;
  };
  // copy over remainder of right if any 
  while (j < right.length) {
    arr[k] = right[j];
    k ++;
    j ++;
  };

  // console.log(`merged : [${arr}]`);

}

const mergeSort = function (origArr, start, end, type = 'merge') {
  let middle = Math.floor((start + end) / 2);
  if (start < end) {
    mergeSort(origArr, start, middle);
    mergeSort(origArr, middle + 1, end);
    merge(origArr, start, middle, end, false);
  }
  return origArr;
};

function driverCode () {

  // use when running code by
  unsortedArrs.forEach(unsortedArr => {
    console.log(`\nInitial array is ${unsortedArr}`);
    let sortedArr = [].concat(mergeSort(unsortedArr, 0, unsortedArr.length - 1));
    console.log(`sorted array is [${sortedArr}]`);
    console.log(`confirm sorted ${testSorted(sortedArr)}\n`);
  });
}
module.exports = mergeSort;

driverCode();