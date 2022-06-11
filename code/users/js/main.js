var users=[
    {
        Firstname : "keren" ,
        Username : "kerenjessica",
        Password : "keren1326"

    },
    {
        Firstname : "audelia" ,
        Username : "audeliaben",
        Password : "audelia2402"

    },
    {
        Firstname : "ilana" ,
        Username : "ilanasimchah",
        Password : "ilana0912"

    },
    {
        Firstname : "sarah" ,
        Username : "sarahle",
        Password : "sarah1404"

    }
];
var main = document.querySelector("main");
var btn = document.querySelector("button");
btn.addEventListener("click", verify);


function verify(){
    var userName =document.getElementById("username").value;
    var passWord =document.getElementById("password").value;
for (let i = 0; i < users.length; i++) {
    var x = users[i]; 
    if(x.Username==userName && x.Password==passWord){
        main.innerHTML="";
        main.innerHTML+= `<h1>Welcome ${users[i].Firstname}</h1>`;
     break
    }
    else{
        console.log("wrong info")
    } 
 }

}


  
