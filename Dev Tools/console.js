//Random Otp Generator Function
let otpGenerator = () => {
  let otp = document.getElementById("otp");
  let random = Math.ceil(Math.random() * 10 ** 4); //as random generate a random number from 0 to 1 digit
  otp.innerHTML = random;
};
