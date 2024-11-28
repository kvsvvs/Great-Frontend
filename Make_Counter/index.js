function MakeCOunter(value = 0) {
  let counter = value;

  return function () {
    return counter++;
  };
}

const counterFunction = MakeCOunter();

console.log("first", counterFunction());
console.log("second", counterFunction());
console.log("third", counterFunction());
