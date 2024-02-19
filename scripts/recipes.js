window.addEventListener("load", sidenVises);

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
}

window.addEventListener("DOMContentLoaded", showData);

// Konstaere API'en via ULR-link:
const recipesURL = `https://rlrnltlgmzclzpyumxli.supabase.co/rest/v1/recipes?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscm5sdGxnbXpjbHpweXVteGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NjIxODUsImV4cCI6MjAyMzMzODE4NX0.C-m5yj5h1tcMxZ45T0rdWHQJW2wXoyWwA_4Ys8ibSS8`;

let recipesTemplate;
let recipesContainer;

// fetch("https://rlrnltlgmzclzpyumxli.supabase.co/rest/v1/recipes", {
//     method: "GET",
//     headers: {
//         apikey:
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscm5sdGxnbXpjbHpweXVteGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NjIxODUsImV4cCI6MjAyMzMzODE4NX0.C-m5yj5h1tcMxZ45T0rdWHQJW2wXoyWwA_4Ys8ibSS8"
//     },
// })
//     .then(res=>res.json())
//     .then(showData)

function showData(recipes){
    console.log(recipes);

    recipesTemplate = document.querySelector(".recipes_template");
    console.log("recipes_template", recipesTemplate);

    recipesContainer = document.querySelector(".recipes_container");
    console.log("recipes_container", recipesContainer)

    fetch(recipesURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        showRecipes(json);
    });
}


function showRecipes(recipesJSON){
    let productClone;
  
      recipesJSON.forEach((recipe) => {
          console.log("recipe", recipe);
          productClone = recipesTemplate.cloneNode(true).content;
        //   productClone.querySelector("a").href = `product.html?id=${product.id}`;
          productClone.querySelector(".recipes_img").src = recipe.img;
          productClone.querySelector(".recipes_img").alt = `Picture of a ${recipe.title_name} the product`;
          productClone.querySelector(".recipes_name").textContent = recipe.title_name;
        
          
          if(recipe.seasons === winter) {
          document.querySelector(".recipesWinter_container").appendChild(productClone);
        } 
        if(recipe.seasons === spring) {
            document.querySelector(".recipesSpring_container").appendChild(productClone);
          } 
          
          if(recipe.seasons === summer){
            document.querySelector(".recipesSummer_container").appendChild(productClone);
          } 
          
          if(recipe.seasons === autumn) {
            document.querySelector(".recipesAutumn_container").appendChild(productClone);
          }
      }); 
  }