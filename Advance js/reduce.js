// Date ==> 10/04/2024
// *** Topic :-> reduce method in array ***
let arr = [1, 2, 2, 1, 2, 2];
let redarr = arr.reduce((val) => {
  return val * 2;
});

console.log(arr); //[ 1, 2, 2, 1, 2, 2 ]
console.log(redarr);
/* 32 ==> 
1*2 = 2
2*2 = 4
4*2 = 8
8*1 = 8
8*2 = 16
16*2 = 32
*/

//***  reduce returns a new value
//? It don't change the existing array
//! It itreates all value for a specific operation and returns a result.
