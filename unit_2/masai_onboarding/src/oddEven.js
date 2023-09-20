function generateNumber() {
  // generate a random integer(hint : Math.random)
  let numDiv = document.getElementById("number")
  let randomnum =  Math.floor(Math.random() * 100) +1;
  numDiv.textContent = randomnum;
  checkOddEven(randomnum);
}

function checkOddEven(num) {
  // logic for even / odd
  let oddeve = document.getElementById("odd-even")
  if(num%2==0) oddeve.textContent = "The number is even"
  else oddeve.textContent = "The number is odd";
}

window.onload = function () {
  // add event listeners to the button here
  let btn = document.getElementById("generate-number");
  btn.addEventListener("click", function() {
    generateNumber();
  })
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
