function countdown() {
    setTimeout(() => {  document.getElementById("countdownText").innerHTML = "4"; }, 1000);
    setTimeout(() => {  document.getElementById("countdownText").innerHTML = "3"; }, 2000);
    setTimeout(() => {  document.getElementById("countdownText").innerHTML = "2"; }, 3000);
    setTimeout(() => {  document.getElementById("countdownText").innerHTML = "1"; }, 4000);
    setTimeout(() => {  document.getElementById("countdownText").innerHTML = "0"; }, 5000);
    setTimeout(() => {  window.location = "main.html"; }, 6000);
}

window.onload = function() {
    countdown()
  };