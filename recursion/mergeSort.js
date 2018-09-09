// const unsortedArr = [12, 11, 9, 5, 4, 2, 1];
const testSorted = require('../basicSorting/testSorted');
const unsortedArrs = require('../basicSorting/arrCollection');


const merge = function (arr, start, middle, end) {
  // console.log('Doing nothing for now!');
  // let tempArrFull = arr.slice(start, end + 1);

  let n1 = middle - start + 1;
  let n2 = end - middle;


  // copy to temp arrays
  let left = arr.slice(start, middle + 1);
  let right = arr.slice(middle + 1, end + 1);
  // console.log(tempArrFull);
  console.log(`\narr : [${arr}]`);
  console.log(`start : ${start}`);
  console.log(`middle : ${middle}`);
  console.log(`end : ${end}`);
  console.log(`left : [${left}]`);
  console.log(`right : [${right}]`);

  let i = 0;
  let j = 0;




  for (let k = start; k <= end && i < left.length && j < right.length; k ++) {

    if (left.length === 1 && right.length === 1) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        arr[k+1] = right[j];
      } else {
        arr[k] = right[j];
        arr[k+1] = left[i];
      }
      break;
    }
    
    if (left[i] <= right[j]) {
      arr[k] =  left[i];
      i ++;
    } else {
      arr[k] = right [j];
      j ++;
    }
  }

  console.log(`merged : [${arr}]`);

}

const mergeSort = function (origArr, start, end, type = 'merge') {


  let middle = Math.floor((start + end) / 2);

  if (start < end) {
    // console.log(`Applying ${type} sort with start: ${start}, end: ${end}, middle: ${middle}`);
    mergeSort(origArr, start, middle);
    mergeSort(origArr, middle + 1, end);
    merge(origArr, start, middle, end);
    // console.log(`Applied ${type} sort with start: ${start}, end: ${end}, middle: ${middle}`);
  }


  return [0, 0];

  // return (testSorted(arr) ? arr : new Error('Not sorted!'));
}
// use when running code by
unsortedArrs.filter((d, i) => i === 1).forEach(unsortedArr => {
  console.log(`\nInitial array is ${unsortedArr}`);
  let sortedArr = [].concat(mergeSort(unsortedArr, 0, unsortedArr.length - 1));
  console.log(`sorted array is ${sortedArr}`);
  // console.log(`confirm sorted ${testSorted(sortedArr)}\n`);
});

module.exports = mergeSort;
