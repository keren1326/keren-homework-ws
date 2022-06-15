import * as View from "./view.js";
import * as Model from "./model.js"

export function init(){
View.createSearchBar();
var searchBtn=document.querySelector("#searchBtn");
searchBtn.addEventListener("click", Model.searchMovie);
}

