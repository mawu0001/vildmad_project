window.addEventListener("load", sidenVises);

let actualSeason = "winter";
let data;

//forkortelser
const menu1 = document.querySelector("#menu1");
const menu2 = document.querySelector("#menu2");
const menu3 = document.querySelector("#menu3");
const menu4 = document.querySelector("#menu4");

const menu1Knap = document.querySelector("#menu1Knap");
const menu2Knap = document.querySelector("#menu2Knap");
const menu3Knap = document.querySelector("#menu3Knap");
const menu4Knap = document.querySelector("#menu4Knap");

function sidenVises() {
  showMenu1();
}

function showMenu1() {
  //Gør menu synlig
  menu1.style.display = "inherit";
  menu2.style.display = "none";
  menu3.style.display = "none";
  menu4.style.display = "none";

  //Styling af knappen
  menu1Knap.firstElementChild.classList.add("selected");
  menu2Knap.firstElementChild.classList = "CTA2";
  menu3Knap.firstElementChild.classList = "CTA2";
  menu4Knap.firstElementChild.classList = "CTA2";

actualSeason = "winter"
showRecipes(data)
}

function showMenu2() {
  menu1.style.display = "none";
  menu2.style.display = "inherit";
  menu3.style.display = "none";
  menu4.style.display = "none";

  //Styling af knappen
  menu1Knap.firstElementChild.classList = "CTA2";
  menu2Knap.firstElementChild.classList.add("selected");
  menu3Knap.firstElementChild.classList = "CTA2";
  menu4Knap.firstElementChild.classList = "CTA2";

  actualSeason = "spring"
  showRecipes(data)
}
function showMenu3() {
  menu1.style.display = "none";
  menu2.style.display = "none";
  menu3.style.display = "inherit";
  menu4.style.display = "none";

  //Styling af knappen
  menu1Knap.firstElementChild.classList = "CTA2";
  menu2Knap.firstElementChild.classList = "CTA2";
  menu3Knap.firstElementChild.classList.add("selected");
  menu4Knap.firstElementChild.classList = "CTA2";

  actualSeason = "summer"
  showRecipes(data)
}
function showMenu4() {
  menu1.style.display = "none";
  menu2.style.display = "none";
  menu3.style.display = "none";
  menu4.style.display = "inherit";

  //Styling af knappen
  menu1Knap.firstElementChild.classList = "CTA2";
  menu2Knap.firstElementChild.classList = "CTA2";
  menu3Knap.firstElementChild.classList = "CTA2";
  menu4Knap.firstElementChild.classList.add("selected");

  actualSeason = "autumn"
  showRecipes(data)


}

// Fetche dataen fra givne API m. promise:
window.addEventListener("DOMContentLoaded", showData);

const parameter = new URLSearchParams(window.location.search);
const seasons = parameter.get("seasons");
console.log(seasons);

// Konstaere API'en via ULR-link:
const recipesURL = `https://rlrnltlgmzclzpyumxli.supabase.co/rest/v1/recipes?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscm5sdGxnbXpjbHpweXVteGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NjIxODUsImV4cCI6MjAyMzMzODE4NX0.C-m5yj5h1tcMxZ45T0rdWHQJW2wXoyWwA_4Ys8ibSS8`;
let recipesTemplate;
let winterContainer;
let springContainer;
let summerContainer;
let autumnContainer;

function showData(recipes){
    console.log(recipes);

    recipesTemplate = document.querySelector(".recipes_template");
    console.log("recipes_template", recipesTemplate);

    winterContainer = document.querySelector(".recipesWinter_container");
    springContainer = document.querySelector(".recipesSpring_container");
    summerContainer = document.querySelector(".recipesSummer_container");
    autumnContainer = document.querySelector(".recipesAutumn_container");


    //fetcher dataen i funktionen
    fetch(recipesURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        showRecipes(json);
        data = json;
    });
}

function showRecipes(recipesJSON){
  winterContainer.innerHTML = ""
  springContainer.innerHTML = ""
  summerContainer.innerHTML = ""
  autumnContainer.innerHTML = ""

    let productClone;
  
      recipesJSON.forEach((recipe) => {
          console.log("recipe", recipe);
          productClone = recipesTemplate.cloneNode(true).content;
          productClone.querySelector("a").href = `recipe.html?id=${recipe.id}`;
          productClone.querySelector(".recipes_img").src = recipe.img;
          productClone.querySelector(".recipes_img").alt = `Picture of a ${recipe.title_name} the product`;
          productClone.querySelector(".recipes_name").textContent = recipe.title_name;
          productClone.querySelector(".link").setAttribute("href", `recipe.html?id=${recipe.id}`);

       if(actualSeason == "winter"){
        if(recipe.TOY.includes(actualSeason)){
        winterContainer.appendChild(productClone)
      }
      }

      if(actualSeason == "spring"){
        if(recipe.TOY.includes(actualSeason)){
        springContainer.appendChild(productClone)
      }
      }

      if(actualSeason == "summer"){
        if(recipe.TOY.includes(actualSeason)){
        summerContainer.appendChild(productClone)
      }
      }

      if(actualSeason == "autumn"){
        if(recipe.TOY.includes(actualSeason)){
        autumnContainer.appendChild(productClone)
      }
      }
      }); 
  }

  //fetcher dataen først og efterfølgende tilkobler den på funktionen
// fetch("https://rlrnltlgmzclzpyumxli.supabase.co/rest/v1/recipes", {
//     method: "GET",
//     headers: {
//         apikey:
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscm5sdGxnbXpjbHpweXVteGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NjIxODUsImV4cCI6MjAyMzMzODE4NX0.C-m5yj5h1tcMxZ45T0rdWHQJW2wXoyWwA_4Ys8ibSS8"
//     },
// })
//     .then(res=>res.json())
//     .then(showData)
