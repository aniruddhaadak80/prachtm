// Addition of two numbers .
function addTwoNum(n1, n2) {
  let res = document.getElementById("h12");
  res.innerHTML = "Sum of 90 and 3 is " + (n1 + n2);
}
addTwoNum(90, 3);

// setTimeout function 
function welcome() {
  let msg = document.getElementById("h11");
  msg.innerHTML = "Welcome to Homepage 🏠";
}
setTimeout(welcome, 5000); //5000 -->5 seconds

// setInterval function
function sampleTime() {
  let d = new Date(); //remember this
  let time = document.getElementById("time");
  //   main content
  time.innerHTML =
    "Time => " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
setInterval(sampleTime, 1000); //1000 --> 1 seconds
