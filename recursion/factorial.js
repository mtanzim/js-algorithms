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

// result is called the accumulator
// tail recursions prevent stack overflow
// this method does not require stacks
// However, the compiler needs to understand this! See Readme
function calcFactorialRecursiveTail (n, result=1) {
  if (n===0) return result; // exit condition
  return calcFactorialRecursiveTail(n-1, n*result);
}



module.exports = calcFactorialRecursive;

(function () {
  
  let number = Number(process.argv[2]);
  if (isNaN(number)) {
    console.log('This is not number');
    throw new Error(`${process.argv[2]} is not a number!`)
  }
  console.log(`Input is: ${number}`);

  // console.log(calcFactorialIter(number));
  console.log(`Head recursion Result is: ${calcFactorialRecursive(number)}`);
  console.log(`Tail recursion Result is: ${calcFactorialRecursiveTail(number)}`);

})();