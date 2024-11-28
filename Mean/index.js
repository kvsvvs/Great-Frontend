function MeanOfAnArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Only Arrays are accepted in this function");
  }
  let length = arr.length;

  const sumOfElements = arr.reduce((accumulator, el) => {
    return accumulator + el;
  }, 0);

  let mean = sumOfElements / length;

  return mean;
}

console.log("mean of array is ", MeanOfAnArray([1, 2, 3, 4, 5]));
