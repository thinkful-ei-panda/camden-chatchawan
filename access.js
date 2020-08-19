const Memory = require('./memory.js');
const memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}

Array.SIZE_RATIO = 3;

function displayArray(arr, desc) {
  let string = '';
  if (arr.length === 0) {
    console.log(`[${string}]`);
    console.log(desc, arr);
    return;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    string += arr.get(i) + ', ';
  }
  string += arr.get(arr.length - 1);
  console.log(desc, arr);
  console.log(`[${string}]`);
}

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(1);
  arr.push(2);
  arr.push(3);
  arr.push(5);
  displayArray(arr, 'after push');
  arr.insert(3, 4);
  displayArray(arr, 'after insert');
  arr.push(1);
  arr.push(2);
  arr.push(3);
  arr.push(5);
  arr.push(1);
  arr.push(2);
  arr.push(3);
  arr.push(5);
  arr.push(1);
  arr.push(2);
  arr.push(3);
  arr.push(5);
  displayArray(arr, 'after resize and A');
  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();
  displayArray(arr, 'after pops');
  console.log('first item in array', arr.get(0));
  arr.length = 0;
  displayArray(arr, 'emptied the array');
  arr.push('tauhida');
  displayArray(arr, 'string pushed');
  console.log(arr.get(0));
}

main();
