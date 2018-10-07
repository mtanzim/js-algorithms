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
  // needs major refactor
  add(key, value) {
    let index = this.getHash(key);
    // console.log(`try adding ${key} with value: ${value} at original index: ${index}`);
    if (this.storage[index] === undefined || this.storage[index] === 'deleted') {
      // console.log(`adding ${key} with value: ${value} at index: ${index}`);
      this.storage[index] = [[key, value]];
      // this.print();
      
    } else if (this.storage[index][0][0] === key) {
      // console.log(`replacing ${key} with value: ${value} at index: ${index}`)
      this.storage[index][0][1] = value;
    } else {
      // let inserted = false;
      let probeStep = 1;
      while (probeStep < this.storageLimit) {
        index = this.getHash(key, probeStep);
        if (this.storage[index] === undefined || this.storage[index] === 'deleted') {
          // console.log(`adding ${key} at index: ${index} with value: ${value} with probe step ${probeStep}`)
          this.storage[index] = [[key, value]];
          break;
        } else if (this.storage[index][0][0] === key) {
          // console.log(`replacing ${key} with value: ${value} at index: ${index}`)
          this.storage[index][0][1] = value;
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

    // console.log(`finding key: ${key} at index: ${index}`);
    
    // if (this.storage[index] && this.storage[index] !== 'deleted') {
    if (this.storage[index]) {
      
      try {
        if (this.storage[index] === 'deleted') throw new Error('Deleted');
        if (this.storage[index][0][0] === key) {
        // return this.storage[index][0];
          found = true;
        } else {
          throw new Error('Not found');
        }
      } catch (err) {
        console.log(err.message);
        let probeStep = 1;
        while (probeStep < this.storageLimit) {
          // console.log(`probe step ${probeStep}`);
          index = this.getHash(key, probeStep);
          if (this.storage[index] === 'deleted') {
            probeStep++;
            continue;
          } else if (this.storage[index][0][0] === key) {
            // return this.storage[index][0];
            found = true;
            // console.log(`found key: ${key} at index: ${index}`);
            break;
          }
          probeStep ++;
        }
      }
    }

    if (found) {
      if (isDelete) {
        this.storage[index] = 'deleted';
        // this.print();
      }
      return this.storage[index][0];
    }
    throw new Error(`${key} Not Found!`);

  }

}

module.exports = OAHashTable;

// driver();

