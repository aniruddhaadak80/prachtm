// Addition of two numbers .
function AddTwoNum(n1, n2) {
  let res = document.getElementById("h12");
  res.innerHTML = "Sum of 90 and 3 is " + (n1 + n2);
  // styles
  res.style.color = "violet";
  res.style.fontFamily = "verdana";
  res.style.backgroundColor = "blue";
  res.style.padding = "10px";
}

AddTwoNum(90, 3);

// setTimeout function .
function welcome() {
  let msg = document.getElementById("h11");
  msg.innerHTML = "Welcome to Homepage  ";
  //styles
  msg.style.color = "green";
  msg.style.backgroundColor = "skyblue";
  msg.style.fontSize = "50px";
  msg.style.padding = "10px";
}
setTimeout(welcome, 5000); //5000 -->5 seconds

// setInterval function
function sampleTime() {
  let d = new Date(); //remember this
  let time = document.getElementById("time");
  //   main content
  time.innerHTML =
    "Time => " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  // styles
  time.style.color = "red";
  time.style.fontSize = "40px";
  time.style.backgroundColor = "skyblue";
  time.style.padding = "10px";
}
setInterval(sampleTime, 1000); //1000 --> 1 seconds
