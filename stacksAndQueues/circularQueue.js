class CircularQueue {
  constructor(maxLen) {
    if (maxLen === undefined || maxLen === null || maxLen === 0) throw new Error('Please provide max length!');

    this.maxLen = maxLen;
    this.data = [];
    this.head = -1;
    this.tail = -1;
    this.isFlipped =false;
    this.emptyVal = 'X';
  }

  // improve this algorithm!!!
  enqueue(value) {
    //check if there's a wrap around needed
    if (this.tail >= this.maxLen - 1 && !this.isFlipped) {
      // check if the beginning of the queue is empty
      this.tail = -1;
      this.isFlipped = true;
      if (this.data[this.tail + 1] === this.emptyVal) {
        this.tail++;
        this.data[this.tail] = value;
      } else {
        this.print();
        throw new Error('Size limit exceeded!');
      }
    // tack on to the end of the array
    } else if(this.isFlipped) {
      if (this.data[this.tail + 1] === this.emptyVal) {
        this.tail++;
        this.data[this.tail] = value;
      } else {
        this.print();
        throw new Error('Size limit exceeded!');
      }
    } else {
      this.data.push(value);
      if (this.head === -1 && this.tail === -1) {
        this.head++;
      }
      this.tail++;
    }


  }

  deueue() {
    let toRet = this.data[this.head];
    this.data[this.head] = this.emptyVal;
    this.head++;
    return toRet;
  }

  peek() {
    return this.data[this.head];
  }

  print() {
    console.log(`\n\nfull array\n[${this.data}]`);
    // console.log(`current queue\n[${this.data.slice(this.head, this.tail + 1)}]`);
    console.log(`head: ${this.head}`);
    console.log(`tail: ${this.tail}`);
  }

};

module.exports = CircularQueue;


(function testQueue() {
  let cq = new CircularQueue(7);
  let testArr = [1, 2, 4, 6, -7];

  console.log('Making queue with: ');
  console.log(testArr);

  testArr.forEach(item => cq.enqueue(item));
  
  console.log('Printing queue at start: ');
  cq.print();
  
  [0, 1, 2].forEach(i => console.log(`dequeued ${cq.deueue()}`));
  console.log('Printing queue after dequeuing: ');
  cq.print();
  
  console.log('Enqueue after dequeue');
  [0,1,2].forEach(item => cq.enqueue(item));
  cq.print();
  
  
  [0].forEach(i => console.log(`dequeued ${cq.deueue()}`));
  console.log('Printing queue after dequeuing again: ');
  cq.print();
  
  console.log('Enqueue after dequeue again');
  [0,1,2].forEach(item => cq.enqueue(item));
  cq.print();


})();