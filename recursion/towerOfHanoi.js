let A = {name: 'A', data: []};
let B = {name: 'B', data: []};
let C = {name: 'C', data: []};

function move(n, towerFrom, towerTo, towerIntermediate) {
  

/*   console.log(`A:[${A}]`);
  console.log(`B:[${B}]`);
  console.log(`C:[${C}]`); */

  

  if (n == 2) {
    towerIntermediate.data.push(towerFrom.data.pop());
    towerTo.data.push(towerFrom.data.pop());
    towerTo.data.push(towerIntermediate.data.pop());
  } else {
    move(n-1,towerFrom, towerIntermediate, towerTo);
    towerTo.data.push(towerFrom.data.pop());
  }

  console.log(`Moving ${n} blocks from tower ${towerFrom.name} to ${towerTo.name} using ${towerIntermediate.name}`);
  console.log(`End of N: ${n}`);
  console.log(`A:[${A.data}]`);
  console.log(`B:[${B.data}]`);
  console.log(`C:[${C.data}]`);

}

// n is the disk with the largest radius
// Objective is to move blocks from A to C
A.data = [4, 3,2,1];
globalN = A.data.length;

console.log(`START:`);
console.log(`A:[${A.data}]`);
console.log(`B:[${B.data}]`);
console.log(`C:[${C.data}]`);
move(globalN,A,C,B)
// move A to C using ToH rules

