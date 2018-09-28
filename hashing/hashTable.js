const hashFunc = (keyStr, maxLen) => {
  let hash = 0;
  for (let i=0; i < keyStr.length; i ++) {
    hash += keyStr.charCodeAt(i)*i;
  }
  // console.log(hash);
  return hash % maxLen;
} 

class HashTable {

  constructor () {
    this.storage = [];
    this.storageLimit = 20;
  }

  print() {
    this.storage.forEach ((a,i) => {
      console.log(`i:${i} value: ${a}`)
    })
  }

  add (key, value) {
    let index = hashFunc(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      this.storage[index] =[[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i ++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        } 
      }

      if (!inserted) this.storage[index].push([key,value]);
    }
  }
}


function driver() {
  // console.log(hashFunc("Tanzim", 4));
  // console.log(hashFunc("Sarah", 4));
  // console.log(hashFunc("Tom", 4));

  let ht = new HashTable();

  ht.add("Tanzim", 29);
  ht.add("Sarah", 24);
  ht.add("Tucker", 18);
  ht.add("Russ", 54);
  ht.add("Jon", 67);
  ht.add("Monty", 32);
  ht.add("Shani", 21);

  ht.print();

}

driver();

