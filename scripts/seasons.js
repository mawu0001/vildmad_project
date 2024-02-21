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

  actualSeason = "winter";
  showPlants(data);
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

  actualSeason = "spring";
  showPlants(data);
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

  actualSeason = "summer";
  showPlants(data);
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

  actualSeason = "autumn";
  showPlants(data);
}

// Fetche dataen fra givne API m. promise:
window.addEventListener("DOMContentLoaded", showData);

const parameter = new URLSearchParams(window.location.search);
const seasons = parameter.get("seasons");
console.log(seasons);

// Konstaere API'en via ULR-link:
const seasonsURL = `https://rlrnltlgmzclzpyumxli.supabase.co/rest/v1/plants?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscm5sdGxnbXpjbHpweXVteGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NjIxODUsImV4cCI6MjAyMzMzODE4NX0.C-m5yj5h1tcMxZ45T0rdWHQJW2wXoyWwA_4Ys8ibSS8`;
let seasonsTemplate;
let winterContainer;
let springContainer;
let summerContainer;
let autumnContainer;

// fetch("https://rlrnltlgmzclzpyumxli.supabase.co/rest/v1/recipes", {
//     method: "GET",
//     headers: {
//         apikey:
//         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscm5sdGxnbXpjbHpweXVteGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NjIxODUsImV4cCI6MjAyMzMzODE4NX0.C-m5yj5h1tcMxZ45T0rdWHQJW2wXoyWwA_4Ys8ibSS8"
//     },
// })
//     .then(res=>res.json())
//     .then(showData)

function showData(recipes) {
  console.log(recipes);

  seasonsTemplate = document.querySelector(".plantTemplate");
  console.log("plantTemplate", seasonsTemplate);

  winterContainer = document.querySelector(".winter_container");
  springContainer = document.querySelector(".spring_container");
  summerContainer = document.querySelector(".summer_container");
  autumnContainer = document.querySelector(".autumn_container");

  //console.log("winter_container", winter_container);

  fetch(seasonsURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      showPlants(json);
      data = json;
    });
}

function showPlants(plantsJSON) {
  winterContainer.innerHTML = "";
  springContainer.innerHTML = "";
  summerContainer.innerHTML = "";
  autumnContainer.innerHTML = "";

  let productClone;

  plantsJSON.forEach((plant) => {
    console.log("plant", plant);
    productClone = seasonsTemplate.cloneNode(true).content;
    //   productClone.querySelector("a").href = `product.html?id=${product.id}`;
    productClone.querySelector(".plantImg").src = plant.profile_image;
    productClone.querySelector(".plantImg").alt = `Picture of a ${plant.title}`;
    productClone.querySelector(".plant_title").textContent = plant.title;

    if (actualSeason == "winter") {
      if (plant.TOY.includes(actualSeason)) {
        winterContainer.appendChild(productClone);
      }
    }

    if (actualSeason == "spring") {
      if (plant.TOY.includes(actualSeason)) {
        springContainer.appendChild(productClone);
      }
    }

    if (actualSeason == "summer") {
      if (plant.TOY.includes(actualSeason)) {
        summerContainer.appendChild(productClone);
      }
    }

    if (actualSeason == "autumn") {
      if (plant.TOY.includes(actualSeason)) {
        autumnContainer.appendChild(productClone);
      }
    }
  });
}
