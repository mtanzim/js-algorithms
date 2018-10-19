module.exports = function testSorted(arr, isAsc = true) {
  for (let i = 1; i < arr.length; i++) {
    if (isAsc) {
      if (arr[i] < arr[i - 1]) return false;
    } else {
      if (arr[i] > arr[i - 1]) return false;
    }
  }
  return true;
};