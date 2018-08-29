// note to always put exit condition
function calcFactorialIter (n) {
  let result = 1;

  for (let i=1; i <= n; i ++) result *=i;

  return result;
}

// recursive version
function calcFactorialRecursive (n) {
  if (n===0) return 1; // exit condition
  return n * calcFactorialRecursive(n-1);
}

module.exports = calcFactorialRecursive;

let number = 10;
console.log(calcFactorialIter(number));
console.log(calcFactorialRecursive(number));