class Stack {
  constructor() {
    this.stackData = []
    this.topIndex = -1;
  }

  pushOnStack(value) {
    this.stackData.push(value);
    this.topIndex++;
  }
  popFromStack() {
    this.topIndex--;
    return this.stackData.pop();
  }

  peekFromStack() {
    return this.stackData[this.topIndex];
  }

  printStack() {
    console.log(this.stackData);
    console.log(this.topIndex);
  }

};


module.exports = Stack;


(function testStack() {
  let stack = new Stack();
  let testArr = [1, 2, 4, 6, -7, 9, 10, -100, 500];

  console.log('Making stack with: ');
  console.log(testArr);

  testArr.forEach(item => stack.pushOnStack(item));
  
  console.log('Printing stack and topIndex: ');
  stack.printStack();

  [0, 1, 2].forEach(i => console.log(`popped ${stack.popFromStack()}`));

  console.log(`peeking: ${stack.peekFromStack()}`);


})();

