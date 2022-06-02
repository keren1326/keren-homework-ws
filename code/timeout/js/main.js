var main=document.querySelector('main');
var btn=document.querySelector("button");
btn.addEventListener( "click", getValue);
btn.addEventListener("click", zeroToNine );

var allInputs=[];

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
var clickedNum=[];
 var zero =document.querySelector( "#zero").addEventListener('click', function(){clickedNum.push("0");console.log(clickedNum);});
 var one =document.querySelector("#one").addEventListener('click', function(){clickedNum.push("1");console.log(clickedNum);});
 var two =document.querySelector("#two").addEventListener('click', function(){clickedNum.push("2");console.log(clickedNum);});
 var three =document.querySelector( "#three").addEventListener('click', function(){clickedNum.push("3");console.log(clickedNum);});
 var four =document.querySelector( "#four").addEventListener('click', function(){clickedNum.push("4");console.log(clickedNum);});
 var five =document.querySelector( "#five").addEventListener('click', function(){clickedNum.push("5");console.log(clickedNum);});
 var six =document.querySelector( "#six").addEventListener('click', function(){clickedNum.push("6");console.log(clickedNum);});
 var seven =document.querySelector( "#seven").addEventListener('click', function(){clickedNum.push("7");console.log(clickedNum);});
 var eight =document.querySelector("#eight").addEventListener('click', function(){clickedNum.push("8");console.log(clickedNum);});
 var nine =document.querySelector( "#nine").addEventListener('click', function(){clickedNum.push("9");console.log(clickedNum);});
// do {
//   for (let i = 0; i < clickedNum.length; i++) {
//     const element = clickedNum[i];
//     if (element==allInputs[i]) {
//       alert("bon code")
//     }
//   }
// } while (clickedNum>=4);
     
   
}
 

// Définissez un code à 4 chiffres à l'aide d'un input et d'un bouton. Une fois le 
// bouton cliqué, remplacez l'écran par un clavier contenant des chiffres de 0 à 
// 9 SEULEMENT! 
// La vérification de correspondance de code est appelée une fois que vous 
// avez appuyé sur quatre boutons. 
// Vous avez trois tentatives pour entrer le bon code. S'il est entré 
// correctement, alertez un message de "Success", sinon, un message d'erreur. 
// Après trois tentatives, alertez "La police arrive!". 
// Chaque fois que vous appuyez sur les boutons, elles changent de couleur. 
// TOUS les quatre numéros doivent être colorés AVANT que l'alerte ne soit 
// affichée. 
// Une fois la boîte de dialogue d'alerte fermée, les couleurs reviennent à leur 
// état d'origine. 
// S'il y a un délai de trois secondes entre les touches, les touches reprennent 
// leur couleur d'origine et la séquence est annulée. Mais, cette séquence 
// n'est pas comptée comme un essai. 
// Les fonctions ne doivent pas dépasser 10 lignes de code APRÈS 
// l’embellissement. Cela inclut les crochets de fermeture.