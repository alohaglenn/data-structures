/*
Create a Stack class WITHOUT using an array and WITHOUT implementing any JavaScript array methods (Array.prototype.push, Array.prototype.pop, etc). Use an object for storage instead.

The Stack class should have the following methods:
push - adds a value to the top of the stack
pop - removes the top value from the stack
peek - tells us what value was last added to the stack
getSize - tells us how many values are currently in the stack
reset - removes all values from the stack

Examples:

stack.push('Frank');
stack.push('Ocean');
stack.storage = { 0: 'Frank', 1: 'Ocean'}
stack.push('Channel');
stack.push('Orange');
stack.storage = { 0: 'Frank', 1: 'Ocean', 2: 'Channel', 3: 'Orange'}
stack.peek() => return 'Orange'
stack.pop() => return 'Orange'
stack.storage = { 0: 'Frank', 1: 'Ocean', 2: 'Channel'}
stack.getSize => return 3
stack.reset()
stack.storage = {}
 */

class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(value) {
    this.storage[this.size] = value;
    this.size += 1;
  }

  pop() {
    const value = this.storage[this.size - 1];
    delete this.storage[this.size - 1];
    this.size -= 1;
    return value;
  }

  peek() {
    return this.storage[this.size - 1];
  }

  getSize() {
    return this.size;
  }

  reset() {
    this.size = 0;
    this.storage = {};
  }
}

export default Stack;
