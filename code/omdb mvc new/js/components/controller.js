import * as Model from "./model.js";
import *  as View from "./view.js";

export function init(){
   View.createSearchBar();
   var searchInput = document.querySelector("#searchInput")
    
   var searchBtn=document.querySelector("#searchBtn");
   var id="";
 
  searchBtn.addEventListener("click", function(){Model.searchMovie(searchInput).then(data=>{
    if(data.Response == "False"){
        View.notFound()
    }
    else{
             for (const i in data.Search) {
              var title = data.Search[i].Title;
              var img = data.Search[i].Poster;
              var year = data.Search[i].Year;
              id = data.Search[i].imdbID;

               View.createMovieCard(title,img , year, id )
             }
        }
    var showInfoBtn= container.getElementsByTagName("button") ;
        for (let i = 0; i < showInfoBtn.length; i++) {
          showInfoBtn[i].addEventListener("click", function (){Model.showInfo(showInfoBtn[i].id)
          .then(data=>{
                var title = data.Title;
                var img = data.Poster;
                var year = data.Year;
                var director=data.Director;
                var actors=data.Actors;
                var plot=data.Plot;

                View.createInfo(title ,year,director, actors, plot,img);
                var closeModalBtn=document.querySelectorAll("#close");
           for (let i = 0; i < closeModalBtn.length; i++) {
                closeModalBtn[i].addEventListener("click", View.closeModal)
            }
           })
   
           });
           
        }
        
}
   
)
})



} 



    
