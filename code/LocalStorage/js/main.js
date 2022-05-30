// Exercise 1: 
// Create a uniqueToken function that returns a unique string of 12-16 characters. 
// Your function should create this unique string by making use of the Date timestamp 
// and a few Math.random calls. For example, create a variable that contains the 
// alphabet in uppercase and lowercase letters (total of 52 characters). Then with the 
// Math random, put together jumbled letters. 
// In your localStorage, create a user array of 5 or more users. Each user should have a 
// name, an email, a token, and a password. 
// In your localStorage you should have another property called user that is just the 
// current user object with only the email and token 
// Upon opening the page, your script will get the users array first, then get the user 
// object. 
// The Token Login function should now verify the user only using the token versus the 
// user array. if there is a match, call your unique token function to create a new 
// token. update the localstorage so that your user object now has the new token, and 
// your users array also has the new token at the matching user. 
// If all goes well, open the localStorage in your browser and refresh the page a few 
// times. You should see the token change each time.
// If the token doesn't match, or there is no user object in the localStorage, then login 
// using the email and password via the form. If the user has a match, create a unique 
// token, add the user to the localStorage and update the user array in the local 
// Storage.


var token ="";
var date = new Date();

function getToken(){
token="";
    token+= date.toLocaleDateString();
    token =token.replace("/" , "").replace("/" , "")
      // console.log(token);
    
    var alphabet= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ,"A","B","C","D","E","F","G","H","I","J","K","L","mM","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ]
    var str = "";
    for (var x = 0; x < 5; x++) {
        for (var y = 0; y < 3; y++) {
        str = str + alphabet[Math.floor(Math.random() * alphabet.length)];
        str = str + "";
        }
    }
    token+= str; 
    return token
   // console.log(token);
    }
    


const userDB=[
    {fname : "keren", email : "kerenbouzaglo@gmail.com" , password : "keren1326", token :getToken() , user :{email :"", token : ""}} ,
    {fname : "henny", email : "henny@gmail.com" , password : "henny0812", token : getToken(),user :{email :"", token : ""}},
    {fname : "ilana", email : "ilana@gmail.com" , password : "ilana0912", token : getToken(),user :{email :"", token : ""}},
    {fname : "sarah", email : "sarah@gmail.com" , password : "sarah1404", token : getToken(),user :{email :"", token : ""}},
    {fname : "bracha", email : "bracha@gmail.com" , password : "bracha1009", token : getToken(),user :{email :"", token : ""}}
]


 function getUser(){
    for (let i = 0; i < userDB.length; i++) {
        const element = userDB[i];
        var mail ="";
        mail= userDB[i].email;
        //console.log(mail);
        var ztoken =""
        ztoken=userDB[i].token ;
      
        userDB[i].user.email=mail;
        userDB[i].user.token=ztoken;
       // console.log(userDB[i].user);
      
    }
}
 
getUser() 
 

