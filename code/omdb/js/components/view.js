var main=document.querySelector("main");
function createSearchBar(){
        main.innerHTML=`
        <div id="searchForm">
        <input type="text" id="searchInput" placeholder="search"/>
        <button id="searchBtn">Search</button>
         </div>
         <div id="container"></div>
         `
        
}

// function createMovieCard(){
//         main.innerHTML+=`<div id="allCards">
//         <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title"></h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Show Info</a>
//   </div>
// </div> 

// </div>
// `
// }
export{createSearchBar , }