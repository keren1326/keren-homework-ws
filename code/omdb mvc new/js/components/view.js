var main=document.querySelector("main");
function createSearchBar(){
        main.innerHTML=`
        <div id="searchForm">
        <input type="text" id="searchInput" placeholder="search" />
        <button id="searchBtn">Search</button>
         </div>
         <div id="container"></div>
         `
         
}


function notFound(){
        document.querySelector("main").innerHTML = `Désolé , nous n'avons rien trouver pour  ${searchInput.value}`;

}
function createMovieCard(title,img , year , id ){

        var container=main.querySelector("#container");
      container.innerHTML += `
        <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="${img}" alt="Card image cap">
         <div class="card-body">
               <h5 class="card-title">${title}</h5>
               <h6 class="card-title">${year}</h6>
               <button class="btn btn-primary" class="showInfoBtn" id=${id}>Show Info</button>
         </div>
        </div>  `;  
    
    }

    function createInfo(title ,year,director, actors, plot , img ){
        main.innerHTML += `
        <div id="info" class="active">
          <div id="infoHeader">
            <h5 id="movieTitle">${title}</h5>
            <button id="close">X</button>
            </div>
            <div id="infoBody">
            <h6 id="movieYear">${year}</h6>
            <h6 >${director}</h6>
            <h6 >${actors}</h6>
  
            <p>${plot}</p>
            </div> 
        </div>
        <div  class="active" id="overlay"></div>
        `;
        var openModal=document.querySelector("#info");
        openModal.style.backgroundImage = `url(${img})`;

    }
function closeModal(){
        var openModal=document.querySelector("#info");
        var overlay=document.querySelector("#overlay");
        openModal.style.display= "none";
        overlay.style.display="none";
        
}
export { createSearchBar , createMovieCard , notFound ,createInfo , closeModal}