// const unsortedArr = [12, 11, 9, 5, 4, 2, 1];
const testSorted = require('./testSorted');

module.exports = function bubbleSort(origArr, type = 'bubble') {

  // console.log(`Applying ${type} sort`);

  let arr = [].concat(origArr);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return (testSorted(arr) ? arr : new Error('Not sorted!'));
};

// console.log(`Initial array is ${unsortedArr}`);
// console.log(`sorted array is ${bubbleSort(unsortedArr)}`);
