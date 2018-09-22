const testSorted = require('./testSorted');
const insertionSort = function (origArr, type = 'insertion') {
  // console.log(`Applying ${type} sort`);
  let arr = [].concat(origArr);
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    // console.log(`\nPass: ${i}`);
    // console.log(`temp: ${temp}`);
    // console.log(`outer arr start: ${arr}`);
    for (let j = i - 1; j >= 0; j--) {
      // console.log(`i: ${i}`);
      // console.log(`j: ${j}`);
      // console.log(`arr inner start: ${arr}`);
      let tempInner = arr[i];
      if (temp < arr[j]) {
        tempInner = arr[j + 1];
        arr[j + 1] = arr[j];
      }
      if (temp >= tempInner) {
        arr[j] = temp;
      }
      // console.log(`arr inner end: ${arr}\n`);
    }
    // console.log(`outer arr end: ${arr}\n`);
    // arr[minIndex] = arr[i];
    // arr[i] = minVal;
  }
  return (testSorted(arr) ? arr : new Error('Not sorted!'));
}


// use when running code by
/* unsortedArrs.forEach(unsortedArr => {
  console.log(`\nInitial array is ${unsortedArr}`);
  let sortedArr = [].concat(insertionSort(unsortedArr));
  console.log(`sorted array is ${sortedArr}`);
  console.log(`confirm sorted ${testSorted(sortedArr)}\n`);
});
 */
module.exports =  insertionSort;
