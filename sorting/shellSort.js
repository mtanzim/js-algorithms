const testSorted = require('./testSorted');
const unsortedArrs = require('./arrCollection');
const insertionSort =  require('./insertionSort');

const genHarr =  function (arrLength) {
  let hArr = [];
  let h = 1;
  while (h < arrLength){
    hArr.push(h);
    h = 3*h+1;
  }

  return hArr.reverse();
}

const shellSort = function (arr) {

  let hArr = genHarr(arr.length);
  console.log(`Knuth array: [ ${hArr} ]`);

  hArr
  .filter((a,i) => i===0 )
  .forEach (intervalGap => {
    console.log(`\ninterval gap: ${intervalGap}`);
    for(let i = 0; i < arr.length; i += intervalGap) {
      console.log(`operating on index ${i}`);
    }
  });
  return arr;
}


function driver() {
  unsortedArrs
    .filter( (a,i) => i === 0 )
    .forEach(arr => {
      console.log(`Sorting [ ${arr} ]`);
      shellSort(arr, 0, arr.length - 1);
      console.log(`Sorted [ ${arr} ]`);
      console.log(`isSorted: ${testSorted(arr)}`);
    });
}

driver();