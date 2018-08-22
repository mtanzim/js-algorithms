const unsortedArr = [12, 11, 9, 5, 4, 2, 1];
let arr = [].concat(unsortedArr);

console.log(`sorted array initially is ${arr}`);

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j+1]) {
      let temp = arr[j];
      arr[j] =  arr[j+1];
      arr[j+1] =  temp;
    }
  }
}

console.log(`sorted array is ${arr}`);
