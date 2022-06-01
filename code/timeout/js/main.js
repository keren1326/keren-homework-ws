var main=document.querySelector('main');
var btn=document.querySelector("button");
btn.addEventListener( "click", getValue);
btn.addEventListener("click", zeroToNine )

var allInputs=[];
function getValue(){
    var input=document.getElementById("num").value;
   console.log(input);
  
  allInputs.push(input);
  console.log(allInputs);
   main.innerHTML="";

}

function zeroToNine(){
  
var clavier = `
<div>
<button id="zero">0</button>
<button id="one">1</button>
<button id="two">2</button>
<button id="three">3</button>
<button id="four">4</button>
<button id="five">5</button>
<button id="six">6</button>
<button id="seven">7</button>
<button id="eight">8</button>
<button id="nine">9</button>
</div>`;

main.innerHTML+= clavier;

}
var clickedNumbers =[];
var clicked=false;
var zero = document.querySelector("button","#zero").addEventListener("click",getNumbers);
 var one =document.querySelector("button","#one").addEventListener( "click", getNumbers );;
 var two =document.querySelector("button","#two").addEventListener( "click", getNumbers );;
 var three =document.querySelector("button","#three").addEventListener( "click", getNumbers );;
 var four =document.querySelector("button","#four").addEventListener( "click", getNumbers );;
 var five =document.querySelector("button","#five").addEventListener( "click", getNumbers );;
 var six =document.querySelector("button","#six").addEventListener( "click", getNumbers );;
 var seven =document.querySelector("button","#seven").addEventListener( "click", getNumbers );;
 var eight =document.querySelector("button","#eight").addEventListener( "click", getNumbers );;
 var nine =document.querySelector("button","#nine").addEventListener( "click", getNumbers );;


function getNumbers(){
   clickedNumbers.push("Test");


  console.log(clickedNumbers)


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