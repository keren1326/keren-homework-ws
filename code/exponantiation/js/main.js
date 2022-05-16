var num = prompt("enter a number");
var exp = prompt("enter an exposant");
var res = num;
var count = exp;


//var result = Math.pow(num , exp);
while (exp >1) {

  res = res * num;
  exp -= 1;
   console.log(res);

  var result = res;
}

alert(result);
