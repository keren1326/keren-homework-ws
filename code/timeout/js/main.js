var main=document.querySelector('main');
var btn=document.querySelector("button");
btn.addEventListener( "click", getValue);
btn.addEventListener("click", zeroToNine );
var clickedNum=[];
var allInputs=[];
var count=0;
function getValue(){
    var input=document.getElementById("num").value;
  allInputs.push(input);

   console.log(allInputs);
   main.innerHTML="";

}

function zeroToNine(){
  
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

main.innerHTML+= clavier;
var buttons=document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", ColorCode)
  buttons[i].addEventListener("click", verif);
}

//  var zero =document.querySelector( "#zero")
//  zero.addEventListener('click', verif);
//  var one =document.querySelector("#one")
// // one.addEventListener('click',verif);
//  var two =document.querySelector("#two")
// // two.addEventListener('click',verif);
//  var three =document.querySelector( "#three")
//  three.addEventListener('click',verif );
//  var four =document.querySelector( "#four")
//  four.addEventListener('click',verif);
//  var five =document.querySelector( "#five")
//  five.addEventListener('click',verif);
//  var six =document.querySelector( "#six")
//  six.addEventListener('click',verif);
//  var seven =document.querySelector( "#seven")
//  seven.addEventListener('click', verif);
//  var eight =document.querySelector("#eight")
//  eight.addEventListener('click', verif);
//  var nine =document.querySelector( "#nine")
//  nine.addEventListener('click', verif);


}
function ColorCode() {
  var makingColorCode = '0123456789ABCDEF';
  var finalCode = '#';
  for (var counter = 0; counter < 6; counter++) {
     finalCode =finalCode+ makingColorCode[Math.floor(Math.random() * 16)];
  }
  //return finalCode;
  this.style.background = finalCode;
 
}
//Function calling on button click.
// function getRandomColor() {
//   $(this).css("background-color", ColorCode());
// }

function verif(){
  var z=this.value;

   if(z=="0"){
     clickedNum.push(zero.value);
   }
   else if(z=="1"){
     clickedNum.push("1");
   }
   else if(z=="2"){
     clickedNum.push("2");
   }
   else if(z=="3"){
     clickedNum.push("3");
   }
   else if(z=="4"){
     clickedNum.push("4");
   }
   else if(z=="5"){
     clickedNum.push("5");
   }
   else if(z=="6"){
     clickedNum.push("6");
   }
   else if(z=="7"){
     clickedNum.push("7");
    }
   else if(z=="8"){
     clickedNum.push("8");
   }
   else if(z=="9"){
     clickedNum.push("9");
   }

  console.log(clickedNum);
   if(clickedNum.length==4 ||clickedNum.length==8||clickedNum.length==12){match()}
   if(count==3){alert(" la police arrive")} 
}

function match(){

var allNum=  clickedNum.join("");
  if(allNum==allInputs){
    setTimeout(alert , 100 ,'sucess') ;
  
   }
 else{
  count++; 
  setTimeout(alert , 100 ,'try again') 
  
}}
