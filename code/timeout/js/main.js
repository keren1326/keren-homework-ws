var main = document.querySelector("main");
var btn = document.querySelector("button");
btn.addEventListener("click", getValue);
btn.addEventListener("click", zeroToNine);
var allInputs = [];
var clickedNum = [];
var count = 0;
window.value = new Date();
//  window.value=window.value.getSeconds();

function getValue() {
  var input = document.getElementById("num").value;
  allInputs.push(input);

  console.log(allInputs);
  main.innerHTML = "";
}

function zeroToNine() {
  var clavier = `
<div> <button id="zero" value="0"> 0</button>
<button id="one" value="1">1</button>
<button id="two" value="2">2</button>
<button id="three" value="3">3</button>
<button id="four" value="4">4</button>
<button id="five" value="5">5</button>
<button id="six" value="6">6</button>
<button id="seven" value="7">7</button>
<button id="eight" value="8">8</button>
<button id="nine" value="9">9</button>
</div>`;

  main.innerHTML += clavier;
  var buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", ColorCode);
    buttons[i].addEventListener("click", verif);
  }
}

function ColorCode() {
  var makingColorCode = "0123456789ABCDEF";
  var finalCode = "#";
  for (var counter = 0; counter < 6; counter++) {
    finalCode = finalCode + makingColorCode[Math.floor(Math.random() * 16)];
  }
  this.style.background = finalCode;
}

function verif() {
  var z = this.value;

  if (z == "0") {
    clickedNum.push(zero.value);
  } else if (z == "1") {
    clickedNum.push("1");
  } else if (z == "2") {
    clickedNum.push("2");
  } else if (z == "3") {
    clickedNum.push("3");
  } else if (z == "4") {
    clickedNum.push("4");
  } else if (z == "5") {
    clickedNum.push("5");
  } else if (z == "6") {
    clickedNum.push("6");
  } else if (z == "7") {
    clickedNum.push("7");
  } else if (z == "8") {
    clickedNum.push("8");
  } else if (z == "9") {
    clickedNum.push("9");
  }

  console.log(clickedNum);
  
  if (clickedNum.length === 1) {
    var start = new Date();
    window.value = start;
    console.log(window.value);
  }
  var end = new Date();
  var diff = Math.abs(end - window.value);
  diff /= 1000;
  console.log(diff);
  if (diff > 3) {
    originalColors();
    clickedNum = [];
  }

  if (clickedNum.length == 4) {
    match();
  }
  if (count == 3) {
    alert(" la police arrive");
  }
}

function match() {
  var allNum = clickedNum.join("");
  if (allNum == allInputs) {
    setTimeout(alert, 100, "sucess");
    setTimeout(originalColors, 100);
  } else {
    count++;
    setTimeout(alert, 100, "try again");
    setTimeout(originalColors, 100);
    clickedNum = [];
    console.log(clickedNum);
  }
}

function originalColors() {
  var x = document.getElementsByTagName("button");
  for (let i = 0; i < x.length; i++) {
    x[i].style.background = "buttonface";
    x[i].style.borderWidth = "1px";
  }
}

