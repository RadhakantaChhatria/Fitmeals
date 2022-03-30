document.querySelector("form").addEventListener("submit", paymentFunction);

function paymentFunction(e) {
  e.preventDefault();
  var cc = document.getElementById("cc").value;
  var cvv = document.getElementById("cvv").value;

  if (cc.length == 16 && cvv.length == 3) {
    alert("Enter Otp = 1234");
    document.querySelector(".otpIn").style.display = "flex";
  }

  if (!(cc.length == 16 && cvv.length == 3)) {
    alert("Incorrect Details");
  }
}

document.getElementById("otpSubmit").addEventListener("click", otpFunction);

function otpFunction(e) {
  e.preventDefault();

  var valid = document.getElementById("oneTmPs").value;
  if (valid == 1234) {
    alert("Payment Successful");
    window.location.href = "success.html";
  } else {
    alert("Invalid Otp");
  }
}
// document.getElementById("otpSubmit").addEventListener("click", function () {
//   window.location.href = "index.html";
// });
