var movies = [];
var id = "";
var mykey = "b0f9a49e";
parseInt(mykey);
var main=document.querySelector("main");
var ids=[];

function searchMovie() {
  var searchInput = document.querySelector("#searchInput");
  fetch(`https://www.omdbapi.com/?s=${searchInput.value}&apikey=${mykey}`)
    .then((res) => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
    .then((data) => {
      if (data.Response == "False") {
        document.querySelector("main").innerHTML = `Désolé , nous n'avons rien trouver pour  ${searchInput.value}`;
      } else {
        movies.push(data);
        console.log(movies);

        for (const i in data.Search) {
          var title = data.Search[i].Title;
          var img = data.Search[i].Poster;
          var year = data.Search[i].Year;
          id = data.Search[i].imdbID;
          
        //   ids.push(id)
        //   console.log(ids);

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
        var showInfoBtn= container.getElementsByTagName("button") ;
        for (let i = 0; i < showInfoBtn.length; i++) {
            // showInfoBtn[i].addEventListener("click", function(){
            //     showInfo(showInfoBtn[i].id)});
            showInfoBtn[i].addEventListener("click", function (){showInfo(showInfoBtn[i].id)});
        }
        }
      }

    })
    .catch((err) => {
      console.log(err);
    });
    
    
}

function showInfo(xId){
    
    fetch(`https://www.omdbapi.com/?i=${xId}&apikey=${mykey}`)
    .then((res) => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
    .then((data) => {
       // console.log(data);
      if (data.Response == "False") {
        document.querySelector("main" ).innerHTML = `Désolé , nous n'avons rien trouver pour  ${searchInput.value}`;
      } else {
          
       
            var title = data.Title;
           var img = data.Poster;
            var year = data.Year;
            var director=data.Director;
            var actors=data.Actors;
            var plot=data.Plot;


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
       

       var closeModalBtn=document.querySelectorAll("#close");
       for (let i = 0; i < closeModalBtn.length; i++) {
       closeModalBtn[i].addEventListener("click", function(){
        var openModal=document.querySelector("#info");
        var overlay=document.querySelector("#overlay");
        openModal.style.display= "none";
        overlay.style.display="none"
       })}
       
      }
    })
    .catch((err) => {
      console.log(err);
    });

}

export { searchMovie , showInfo };
