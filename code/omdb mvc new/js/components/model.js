var mykey = "b0f9a49e";
var movies =[];
//var id ="";
function searchMovie(x) {
   return new Promise((resolve , reject)=>{
    fetch(`https://www.omdbapi.com/?s=${x.value}&apikey=${mykey}`)
    .then((res) => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
    .then((data)=>{
       resolve(data);
       movies.push(data);
         console.log(movies);
        
         
        })

    .catch((err) => {
      reject(err);
    });
    
    
   }) 
}

function showInfo(xId){
    
 return new Promise((resolve , reject)=>{
  fetch(`https://www.omdbapi.com/?i=${xId}&apikey=${mykey}`)
  .then((res) => {
    if (!res.ok) throw new Error(res.status);
    return res.json();
  })
  .then((data) => {
      resolve(data);

    
  })
  .catch((err) => {
    reject(err);
  });

 }) 
}
export{searchMovie ,  showInfo}