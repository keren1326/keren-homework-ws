//variable prédefinie
var score = 0;
var level = 1;
var missedClicks = 0;
var pointsToNextLevel = 10;
var timer = 60;
var count=0;
const $={
    button : document.querySelector("#rotative-bar"),
    level : document.querySelector("#level"),
    score : document.querySelector("#score"),
    missedClicks : document.querySelector("#missed-clicks"),
    timer : document.querySelector("#timer"),
    points : document.querySelector("#points"),
    highScores : document.querySelector("#high-scores"),
    container : document.querySelector("#container")
}

// rempli les differentes categories
 $.level.innerHTML+=`${level}`;
 $.missedClicks.innerHTML+=`${missedClicks}`;
 $.timer.innerHTML+=`${timer}`;
 $.points.innerHTML+=`${pointsToNextLevel}`;
 $.score.innerHTML+=`${score}`



var usersFromLocalStorage=
[{score: "600",
fName : "Meir Sabbah",
date : new Date},
{score: "538",
fName : "Ringo Starr ",
date : new Date},
{score: "512",
fName : "John Lennon ",
date : new Date},
{score: "490",
fName : "Paul McCartney ",
date : new Date},
{score: "469",
fName : "George Harrison",
date : new Date}
//  "600- Meir Sabbah ",
// "538 - Ringo Starr",
// "512- John Lennon",
// "490 - Paul McCartney",
// "469 - George Harrison "
] 

window.localStorage.setItem("users", JSON.stringify(usersFromLocalStorage)); //met les high scores dans le local storage 

var highScores=[
     document.querySelector("#high-scores1"),
    document.querySelector("#high-scores2"),
     document.querySelector("#high-scores3"),
     document.querySelector("#high-scores4"),
     document.querySelector("#high-scores5"),
]
var user = JSON.parse(window.localStorage.getItem("users"));// recupere les high score du local storage 

//rempli les meilleurs scores
for (let i = 0; i < user.length; i++) {
    var x = usersFromLocalStorage[i];
    var z=highScores[i]
    z.innerHTML+=`<p class="tooltip">${x.score}-${x.fName}<span class="tooltiptext">${tooltiptext}</span></p>`
    var tooltiptext= x.date;
    var tooltip=document.querySelector("tooltip");
    
 }

//defini la fonction pour commencer le jeu 
 $.container.addEventListener("click",startTheGame)

var startGame=document.querySelector("#gametitle");
startGame.addEventListener("mouseover",function(){
startGame.innerHTML="";
startGame.innerHTML+=`<h3 id="start">Click to start</h3>`
 })
 
var interval = 2;

//fontion qui fait demarrer le jeu et tourner la barre 
function startTheGame(){
    var z= confirm("Do You really want to start ? ")
    if(z==true){
        
        var game=document.querySelector("#game");
        game.addEventListener("click",missedClick);
     
        $.button.addEventListener("click",(e)=>{e.stopPropagation()})
      rotation();
       $.container.removeEventListener("click",startTheGame); 
      $.button.addEventListener("mouseover",escapeBar);
       var myInterval= setInterval(function () {
        timer--;
        $.timer.innerHTML=timer;
        stoptimer()
    }, 1000); 
    function stoptimer(){
        if($.timer.innerHTML<="0"){clearInterval(myInterval)
        alert(`GAME OVER 
                Your score was ${score}`)
               stopGame()
            }
    }
    }
}


function rotation(){
    $.button.style.animation= `rotation ${interval}s infinite linear`;
    $.button.style.animationName="rotation";
}
// fonction quand on appuie sur la barre rotative 
$.button.addEventListener("click", clickBar)


function clickBar(){
count++;
pointsToNextLevel--;
$.points.innerHTML=pointsToNextLevel;

if(pointsToNextLevel==0){
    count=0;
    level++;
    timer+=10;
    $.timer.innerHTML=timer;
    $.level.innerHTML=level;
    $.button.style.animation= `rotation ${interval-=0.25}s infinite linear`;
    pointsToNextLevel=10;
    $.points.innerHTML=pointsToNextLevel;
    escapeTime-=50;
}
score+=10 * level;
$.score.innerHTML=score;
if(level>=5){
    alert(`GAME OVER 
            Your score was ${score}`)
     stopGame()
}
}


function missedClick(){
        missedClicks++;
        score-=level;
        $.score.innerHTML=score;
        $.missedClicks.innerHTML=missedClicks;
        $.score.innerHTML=score;
}



var escapeTime=300;
function escapeBar(){
    $.button.style.cursor="crosshair";
   setTimeout( function(){
    var top =Math.floor(Math.random() * (500 - 1)) + 1;
   var left=Math.floor(Math.random() * (500 - 1)) + 1;
   $.button.style.position="absolute"
   $.button.style.top = `${top}px`;
   $.button.style.left = `${left}px`;
   },escapeTime)
   
    
}

function stopGame(){
    $.button.removeEventListener("mouseover",escapeBar);
    $.button.style.animation="none";
    for (let i = 0; i < user.length; i++) {
        var a = usersFromLocalStorage[i].score;
        var z=highScores[i]
        if(score>a){
           var p= prompt(`
           Congratulations you beated a High Score player !
           Enter your name`  );
            
             user.pop();
             user.push({score : score ,
            fName : p,
            date : new Date })
            window.localStorage.setItem("users", JSON.stringify(user));
            
             JSON.parse(window.localStorage.getItem("users"))
             console.log(user);
         z.innerHTML="";
           z.innerHTML+=`<p>${score}-${p}</p>`
           
          }
    }
    $.level.innerHTML=`1`;
 $.missedClicks.innerHTML=`0`;
 $.timer.innerHTML=`60`;
 $.points.innerHTML=`10`;
 $.score.innerHTML=`0` 
}
