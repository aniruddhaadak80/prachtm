// Date --> 10/4/2024

//*** Topic ==> Error handling  ***
let a = 90;
let b = 50;
let c = true;

let d = "Ani";

console.log(a + b);
console.log(a + c);
console.log(a + d);
console.log(b + c); //51 as 50 + true == 1 because true=1
// for error handling
try {
  console.log(d + g); //error line
} 
catch (error) {
  console.log(error); //ReferenceError: g is not defined
}

console.log(a);
console.log(b);
console.log(c);
console.log(d);
