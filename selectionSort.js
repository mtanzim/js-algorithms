const unsortedArr = [-12, 11, 9, -5, 4, 2, 1];

function selectionSort(origArr, type = 'selection') {

  console.log(`Applying ${type} sort`);

  let arr = [].concat(origArr);
  for (let i = 0; i < arr.length; i++) {
    let index = i;
    let minVal = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (arr[j]<minVal) {
        minVal=arr[j];
        index=j;
      }
    }
    console.log(`\nPass: ${i}`);
    console.log(`minval: ${minVal}`);
    console.log(`arr: ${arr}\n`);
    arr[index] = arr[i];
    arr[i] = minVal;
  }

  return arr;
}

console.log(`Initial array is ${unsortedArr}`);
console.log(`sorted array is ${selectionSort(unsortedArr)}`);