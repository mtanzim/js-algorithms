const testSorted = require('./testSorted');
const unsortedArrs = require('./arrCollection');

// unsortedArrs.forEach(arr => console.log(arr));
const partition = function (arr, start, end, debug = false) {

  if (debug) console.log(`\npartitioning [ ${arr} ]`)

  let pivot = arr[end];
  let i = start;

  for (let j = start; j < end; j++) {
    if (arr[j] <= pivot) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      i++;
    }
  }

  arr[end] = arr[i];
  arr[i] = pivot;

  if (debug) {
    console.log(`pivot location is ${i}`);
    console.log(`pivot value is ${arr[i]}`);
    console.log(`arr after pivoting is [ ${arr} ]`);
  }
  return i;

}

const quickSort = function (arr, start, end, debug = false) {
  // console.log(arr);
  // console.log(start);

  if (start < end) {
    if (debug) console.log(`\nSortting arr indices ${start} to ${end}`);
    if (debug) console.log(`before recursive sort [${arr}]`);
    let pivot = partition(arr, start, end, debug);
    quickSort(arr, start, pivot - 1);
    if (debug) console.log(`after left sort [${arr}]`);
    quickSort(arr, pivot + 1, end);
    if (debug) console.log(`after right sort [${arr}]`);
  };
}


module.exports = quickSort;

function driver() {
  unsortedArrs
    // .filter( (a,i) => i === 1 )
    .forEach(arr => {
      console.log(`Sorting [ ${arr} ]`)
      quickSort(arr, 0, arr.length - 1);
      console.log(`Sorted [ ${arr} ]`);
      console.log(`isSorted: ${testSorted(arr) ? 'YES' : 'NO'}`);
    });
}

driver();