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

fetch("https://rlrnltlgmzclzpyumxli.supabase.co/rest/v1/plants", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscm5sdGxnbXpjbHpweXVteGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NjIxODUsImV4cCI6MjAyMzMzODE4NX0.C-m5yj5h1tcMxZ45T0rdWHQJW2wXoyWwA_4Ys8ibSS8",
  },
})
  .then((res) => res.json())
  .then(showPlants);

function showPlants(plantJSON) {
  plantJSON.forEach((plants) => {
    // henter indhold
    const Template = document.querySelector(".plantTemplate").content;
    const copy = Template.cloneNode(true);

    //ændre indhold
    copy.querySelector(".plant_title").textContent = plants.title;
    copy.querySelector(".plantImg").src = plants.profile_image;
    copy.querySelector(".plantImg").alt = `picture of a ${plants.title}`;
    copy.querySelector(".link").setAttribute("href", `plant.html?id=${plants.id}`);

    if (plants.months) {
      //   document.querySelector("#december_container").appendChild(copy);
    }

    document.querySelector("#december_container").appendChild(copy);
  });
}

// function showPlants(plants) {
//   // looper og kalder plant
//   plants.forEach(showPlant);
// }

// function showPlant(plant) {
//   //fange temp
//   const Template = document.querySelector(".plantTemplate").content;
//   //lav kopi
//   const copy = Template.cloneNode(true);
//   //ændre indhold
//   copy.querySelector(".mr").textContent = plant.title;
//   copy.querySelector(".plantImg").src = plant.profile_image;

//   if (plant.months.january) {
//     //apende
//     document.querySelector("#januar_container").appendChild(copy);
//   }
// }

/*
          <article>
            <div class="menucard">
              <div class="menucardflex1">
                <ul>
                  <li class="flexitem1">
                    <img
                      class="plantImg"
                      src="https://vildmadv2.vps.webdock.io/application/files/1916/2436/8346/Bog_ravarkort_1.png"
                      alt="Beech plant"
                    />
                    <p class="mr">Beech</p>
                  </li>
                </ul>
              </div>
            </div>
          </article>


 {
  "id": 399,
  "title": "Sea beet",
  "months": "february, march, april, may",
  "sankelandskaber_title": "Watercourse",
  "sankelandskaber_id": 173,
  "profile_image": "https://vildmadv2.vps.webdock.io/application/files/4316/2451/9319/Strandbede_ravarekort_app.png",
  "profile_image/id": 5561,
  "category": "Beach herbs",
  "Whereto": "You can find sea beet all over Denmark, but especially on the coasts along the Great Belt. Look for it on beaches, in salt marshes, and by on gravel and rock shorelines in towns. It fares best when in the company of decomposing seaweed on the beach. On rocky beaches and along stone formations on the coast, you can find it a bit away from the water's edge, where the washed-up plants decompose.\n\nSalt marshes, beaches, towns.",
  "pickit": "Sea beet grows in great quantities in some places, and you can harvest a great deal in those spots. Pick the young leaves at the beginning of the season and large leaves later.",
  "spotit": "In its first year of life, sea beet doesn't get particularly large, but grows in what is called a rosette—a small twist of leaves. In its second year, however, it expands rapidly, sprouting many leaves and turning bushy. Eventually it will grow to one and a half meters tall with shiny, fleshy leaves that look like fresh spinach. The leaves have curly edges, light ribs, and are shaped like eggs or arrowheads. The flowers are small and green.",
  "riskfree": "true",
  "description": "Sea beet is the wild ancestor of the cultivated beet. It has been used in cooking in Denmark for nearly 7000 years, and with good reason: it's one of the beach's most delicious herbs.",
  "plant_heroimg": "https://vildmad.dk/application/files/2214/9062/4980/VILDMAD_RV_Strandbede_09.jpg"
}
 */
