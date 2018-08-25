const unsortedArrs = require('./arrCollection');
const insertionSort = require('./insertionSort');
// const bubbleSort = require('./bubbleSort');
// const selectionSort = require('./selectionSort');

const binarySearch = function (arr, value) {
  // console.log(`unsorted array is: `);
  // console.log(arr);
  const sortedArr = insertionSort(arr);
  // console.log(`\ninsertion sorted array is: `);
  // console.log(sortedArr);
  // console.log(`looking for ${value}\n\n`);

  let start = 0;
  let end = sortedArr.length;
  let mid = Math.floor(end / 2);

  let isLeft = true;
  let found = false;

  let ceiling = 10;
  let counter = 0;

  do {
    // console.log(`counter: ${counter}`);
    // console.log(sortedArr.slice(start, end));
    // left search
    if (value === sortedArr[mid]) {
      found = true;
      console.log(`Found value ${value} at index ${mid} at ${counter}th iteration.`)
    } else {
      // console.log(arr[mid]);
      if (value < sortedArr[mid]) isLeft = true;
      else isLeft = false;

      if (isLeft) {
        end = mid;
      } else {
        start = mid;
      }
      mid = Math.floor((start + end) / 2);

    }
    counter++;

  } while (!found && counter < ceiling);
  // console.log(mid);
}

module.exports = binarySearch;
// binarySearch(unsortedArrs[0],12);

unsortedArrs.forEach(unsortedArr => {
  console.log(`\nSearching through: `);
  console.log(unsortedArr);
  unsortedArr.forEach(val => binarySearch(unsortedArr, val));
})