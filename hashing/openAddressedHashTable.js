  const hashFunc = require('./hashFunc');
  const ChainedHashTable = require('./chainedHashTable');

class OAHashTable extends ChainedHashTable {

  constructor () {
    super();
    this.storage = [];
    this.storageLimit = 20;
  }

  getHash(key, probeStep) {
    return hashFunc(key, this.storageLimit, probeStep);
  }

  //uses open addressing
  add(key, value) {
    let index = this.getHash(key);
    if (this.storage[index] === undefined || this.storage[index] === 'deleted') {
      this.storage[index] = [[key, value]];
      // this.print();
    } else {
      let inserted = false;
      let probeStep = 1;
      while (probeStep < this.storageLimit) {
        if (this.storage[index][0][0] === key) {
          // console.log(`found duplicate`);
          this.storage[index][0][1] = value;
          break;
          // inserted = true;
        }
        index = this.getHash(key, probeStep);
         if (this.storage[index] === undefined) {
          this.storage[index] = [[key, value]];
          break;
        } else {
          // console.log(`need to probe again :/`)
        }
        probeStep ++;
      }
    }
  }

  find(key, isDelete = false) {
    let index = this.getHash(key);
    let found = false;

    if (this.storage[index] && this.storage[index] !== 'deleted') {
      if (this.storage[index][0][0] === key) {
        // return this.storage[index][0];
        found = true;
      } else {
        let probeStep = 1;
        while (probeStep < this.storageLimit) {
          // console.log(`probe step ${probeStep}`);
          index = this.getHash(key, probeStep);
          if (this.storage[index][0][0] === key) {
            // return this.storage[index][0];
            found = true;
            break;
          }
          probeStep ++;
        }
      }
    }

    if (found) {
      if (isDelete) this.storage[index] = 'deleted';
      return this.storage[index][0];
    }
    throw new Error(`${key} Not Found!`);

  }

}

module.exports = OAHashTable;

// driver();

