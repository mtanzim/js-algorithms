// use this variable to control how many pegs are to be used
// globalN is the disk with the largest radius
// Objective is to move blocks from A to C
let globalN = 7;

let A = { name: 'A', data: [] };
let B = { name: 'B', data: [] };
let C = { name: 'C', data: [] };

let globalCounter = 0;

function checkSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) throw new Error('Dafuq check your code!');
  }
}

function move(n, towerFrom, towerTo, towerIntermediate) {

  // console.log(`Need to move ${n} blocks from tower ${towerFrom.name} to ${towerTo.name} using ${towerIntermediate.name}`);

  checkSorted(towerFrom.data);
  checkSorted(towerTo.data);
  checkSorted(towerIntermediate.data);

/*   if (n <= 2) {
    towerIntermediate.data.push(towerFrom.data.pop());
    globalCounter++;
    towerTo.data.push(towerFrom.data.pop());
    globalCounter++;
    towerTo.data.push(towerIntermediate.data.pop());
    globalCounter++; */
  if (n === 1) {
    towerTo.data.push(towerFrom.data.pop());
    globalCounter++;
    // console.log('Finished');
  } else {
    move(n - 1, towerFrom, towerIntermediate, towerTo);
    towerTo.data.push(towerFrom.data.pop());
    globalCounter++;
    move(n - 1, towerIntermediate, towerTo, towerFrom);
  }

  console.log(`\nMoved ${n} blocks from tower ${towerFrom.name} to ${towerTo.name} using ${towerIntermediate.name}`);
  console.log(`End of N: ${n}`);
  console.log(`A:[${A.data}]`);
  console.log(`B:[${B.data}]`);
  console.log(`C:[${C.data}]`);
}



// set up 'from' array 
for (let j = globalN; j > 0; j--) A.data.push(j);

console.log(`\nSTART:`);
console.log(`A:[${A.data}]`);
console.log(`B:[${B.data}]`);
console.log(`C:[${C.data}]`);

if (globalN <=2) throw new Error ('Please set number of pegs higher than 2!');
move(globalN, A, C, B);

console.log(`\nEND:`);
console.log(`A:[${A.data}]`);
console.log(`B:[${B.data}]`);
console.log(`C:[${C.data}]`);
console.log(`\nUsed ${globalCounter} moves.`);

