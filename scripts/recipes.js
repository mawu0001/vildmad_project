// https://rlrnltlgmzclzpyumxli.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscm5sdGxnbXpjbHpweXVteGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NjIxODUsImV4cCI6MjAyMzMzODE4NX0.C-m5yj5h1tcMxZ45T0rdWHQJW2wXoyWwA_4Ys8ibSS8

// Til at se om der er forbindelse til serveren:
console.log("Go sustainability");

// Fetche dataen fra givne API m. promise:
window.addEventListener("DOMContentLoaded", showData);

// Konstaere API'en via ULR-link:
const recipesURL = `https://rlrnltlgmzclzpyumxli.supabase.co/rest/v1/recipes?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscm5sdGxnbXpjbHpweXVteGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NjIxODUsImV4cCI6MjAyMzMzODE4NX0.C-m5yj5h1tcMxZ45T0rdWHQJW2wXoyWwA_4Ys8ibSS8`;

let recipesTemplate;
let recipesContainer;

fetch("https://rlrnltlgmzclzpyumxli.supabase.co/rest/v1/recipes", {
    method: "GET",
    headers: {
        apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscm5sdGxnbXpjbHpweXVteGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NjIxODUsImV4cCI6MjAyMzMzODE4NX0.C-m5yj5h1tcMxZ45T0rdWHQJW2wXoyWwA_4Ys8ibSS8"
    },
})
    .then(res=>res.json())
    .then(showData)

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
        
          recipesContainer.appendChild(productClone);
      }); 
  }


//Intern menu
window.addEventListener("load", sidenVises);

//forkortelser
const winter = document.querySelector("#winter");
const spring = document.querySelector("#spring");
const summer = document.querySelector("#summer");
const autum = document.querySelector("#autum");

const winterKnap = document.querySelector("#winterKnap");
const springKnap = document.querySelector("#springKnap");
const summerKnap = document.querySelector("#summerKnap");
const autumKnap = document.querySelector("#autumKnap");

function sidenVises() {
    console.log("sidenVises");
    showMenu1();
  }