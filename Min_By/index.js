"use strict";

function minBy(collection, iteratee) {
  if (!Array.isArray(collection) || typeof iteratee !== "function") {
    throw new TypeError(
      "Invalid input: Expected an array and a function as parameters."
    );
  }

  if (collection.length === 0) {
    return undefined;
  }

  let minElement = collection[0];
  let minValue = iteratee(minElement);

  for (let i = 1; i < collection.length; i++) {
    const element = collection[i];
    const value = iteratee(element);

    if (value < minValue) {
      minElement = element;
      minValue = value;
    }
  }

  return minElement;
}

const users = [
  { user: "Alice", age: 34 },
  { user: "Bob", age: 25 },
  { user: "Charlie", age: 30 },
];

const youngest = minBy(users, (user) => user.age);
console.log(youngest);
