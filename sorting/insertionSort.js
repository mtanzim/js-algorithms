const testSorted = require('./testSorted');
const unsortedArrs = require('./arrCollection');

const insertionSort = function (origArr, type = 'insertion') {
  let arr = [].concat(origArr);
  // console.log(`Applying ${type} sort on array: [ ${arr} ]`);
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    // console.log(`\nPass: ${i}`);
    // console.log(`temp: ${temp}`);
    // console.log(`outer arr start: ${arr}`);
    
    let j = i -1;
    
    while (j >= 0 && arr[j] > temp) {
      arr[j+1] = arr[j];
      j --;
    }
    
    arr[j+1] = temp;
    // console.log(`outer arr end: ${arr}`);

  }
  return (testSorted(arr) ? arr : new Error('Not sorted!'));
};

module.exports =  insertionSort;

// use when running code by
function driver() {
  
  unsortedArrs
  // .filter((a,i) =>  i === 1)
  .forEach(unsortedArr => {
    console.log(`\nInitial array is ${unsortedArr}`);
    let sortedArr = [].concat(insertionSort(unsortedArr));
    console.log(`sorted array is ${sortedArr}`);
    console.log(`confirm sorted ${testSorted(sortedArr)}\n`);
  });
}

// driver();

