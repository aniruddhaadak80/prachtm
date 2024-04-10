// Date ==> 10/04/2024
// *** Topic :-> map in array ***
let arr = [34, 54, 23, 53, 44];
let arr2 =arr.map((val, index) => {
  console.log(val, index);
});
// map don't change the existing array insted it create a new array.
console.log(arr);
// map returns a new array .