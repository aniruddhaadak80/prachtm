// Date ==> 10/04/2024
// *** Topic :-> filter method in array ***
let arr = [3, 4, 32, 54, 26, 74, 95];
let filarr = arr.filter((val) => {
  return val > 30; //return all values that are grater than 30
});

console.log(filarr); //[ 32, 54, 74, 95 ]
console.log(arr); // [ 3,  4, 32, 54,26, 74, 95]


//***  filter also don't change the existing array .
//? It creates a new array
//! It returns a new array
