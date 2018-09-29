  const hashFunc = require('./hashFunc');  
  class HashTable {

  constructor () {
    this.storage = [];
    this.storageLimit = 20;
  }

  getHash (key) {
    return hashFunc(key, this.storageLimit);
  }

  print() {
    this.storage.forEach ((a,i) => {
      console.log(`i:${i} value: ${a}`)
    })
  }

  //uses chaining
  add (key, value) {
    let index = this.getHash(key);
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

  delete (key) {
    try {
      this.find(key, true);
      return `Deleted ${key}`;
    } catch (err) {
      return err.message;
    }
  }
  
  lookup(key) {
    console.log(`Finding ${key}`);
    let returnVal = undefined;
    try {
      console.log(`${this.find(key)[0]} is ${this.find(key)[1]} years old`);
      returnVal =  this.find(key)[1];
    } catch (err) {
      returnVal = err.message;
    }
    return returnVal;
  }

  find (key, isDelete = false) {
    let index = this.getHash(key);
    if (this.storage[index]) {
      for (let i = 0; i < this.storage[index].length; i ++) {
        if (this.storage[index][i][0]===key) {
          if (isDelete) this.storage[index].splice(i,1);
          return this.storage[index][i];
        }      
      }
    } else {
      throw new Error(`${key} Not Found!`);
    }
    throw new Error(`${key} Not Found!`);
  }
}

module.exports = HashTable;

// driver();

