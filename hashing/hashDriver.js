const CHashTable = require('./chainedHashTable');
const OAHashTable = require('./openAddressedHashTable');

function driver(ht) {
/*   console.log(hashFunc("Tanzim", 4));
  console.log(hashFunc("Sarah", 4));
  console.log(hashFunc("Tom", 4)); */


  ht.add("Tanzim", 29);
  ht.add("Sarah", 24);
  ht.add("Tucker", 18);
  ht.add("Tucker", 55);
  ht.add("Guss", 102);
  ht.add("Russ", 110);
  ht.add("Jon", 67);
  ht.add("Monty", 32);
  ht.add("Shanti", 21);
  ht.add("Sarah", 44);

  ht.add("Tanzim", 45);
  ht.add("Sarah", 46);
  ht.add("Tucker", 47);
  ht.add("Tucker", 48);
  ht.add("Guss", 49);
  ht.add("Russ", 50);
  ht.add("Jon", 51);
  ht.add("Monty", 52);
  ht.add("Shanti", 53);
  ht.add("Sarah", 54);

  ht.print();

  console.log(ht.lookup("Tanzim"));
  console.log(ht.lookup("Sarah"));
  console.log(ht.lookup("Tucker"));
  console.log(ht.lookup("Russ"));
  console.log(ht.lookup("Jon"));
  console.log(ht.lookup("Monty"));
  console.log(ht.lookup("Shanti"));
  console.log(ht.lookup("Bob"));

  console.log(ht.delete("Tanzim"));
  console.log(ht.delete("Sarah"));
  console.log(ht.delete("Russ"));
  console.log(ht.delete("Bob"));
  ht.print();

  console.log('\nFind after delete!\n');

  console.log(ht.lookup("Tanzim"));
  console.log(ht.lookup("Sarah"));
  console.log(ht.lookup("Tucker"));
  console.log(ht.lookup("Russ"));
  console.log(ht.lookup("Jon"));


  ht.add("Tanzim", 29);
  ht.add("Tucker", 18);
  ht.add("Russ", 102);
  ht.add("Sarah", 24);
  ht.print();

  console.log(ht.lookup("Tanzim"));
  console.log(ht.lookup("Sarah"));
  console.log(ht.lookup("Tucker"));
  console.log(ht.lookup("Russ"));
  console.log(ht.lookup("Jon"));

};

let cht = new CHashTable();
let oht = new OAHashTable();

console.log(`\n\nTesting Chained HashTable\n\n===============================================`);
driver(cht);
console.log(`\n\nTesting Open Addressed HashTable\n\n===============================================`);
driver(oht);
