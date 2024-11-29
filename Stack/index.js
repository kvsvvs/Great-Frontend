"use strict";

class Stack {
  #items;

  constructor() {
    this.#items = [];
  }

  push(element) {
    this.#items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow: Cannot pop from an empty stack.");
    }
    return this.#items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty: Cannot peek.");
    }
    return this.#items[this.#items.length - 1];
  }

  isEmpty() {
    return this.#items.length === 0;
  }

  size() {
    return this.#items.length;
  }

  clear() {
    this.#items = [];
  }

  toString() {
    return this.#items.join(", ");
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
console.log("Stack after push:", stack.toString()); // "10, 20, 30"

console.log("Peek:", stack.peek()); // 30

console.log("Popped element:", stack.pop()); // 30
console.log("Stack after pop:", stack.toString()); // "10, 20"

console.log("Stack size:", stack.size()); // 2

console.log("Is stack empty?", stack.isEmpty()); // false

stack.clear();
console.log("Stack after clear:", stack.toString()); // ""
console.log("Is stack empty?", stack.isEmpty()); // true
