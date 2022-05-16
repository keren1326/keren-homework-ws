var num = prompt("enter a number");
var mid = Math.floor(num.length / 2);
var palindrome = false;
var message = "";

for (var i = 0; i < mid; i++) {
  console.log(num[num.length - 1 - i]);
  if (num[i] == num[num.length - 1 - i]) {
    palindrome = true;
    message = "ce nombre est un palindrome";
  } else {
    message = "ce nombre n'est pas un palindrome";
  }
}

alert(message);
