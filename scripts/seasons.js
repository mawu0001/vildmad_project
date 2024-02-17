// https://rlrnltlgmzclzpyumxli.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscm5sdGxnbXpjbHpweXVteGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NjIxODUsImV4cCI6MjAyMzMzODE4NX0.C-m5yj5h1tcMxZ45T0rdWHQJW2wXoyWwA_4Ys8ibSS8
// fetch("")
//     .then(res=>res.json())
//     .then(showData)

// function(){

// }

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
  console.log("sidenVises");
  showMenu1();
}

function showMenu1() {
  console.log("Menu1 vises");

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
  console.log("Menu2 vises");

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
  console.log("Menu3 vises");

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
  console.log("Menu4 vises");

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
