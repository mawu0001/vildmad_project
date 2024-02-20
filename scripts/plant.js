const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://rlrnltlgmzclzpyumxli.supabase.co/rest/v1/plants`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscm5sdGxnbXpjbHpweXVteGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NjIxODUsImV4cCI6MjAyMzMzODE4NX0.C-m5yj5h1tcMxZ45T0rdWHQJW2wXoyWwA_4Ys8ibSS8",
  },
})
  .then((response) => response.json())
  .then(showPlant);

function showPlant(plant) {
  console.log(plant);
  document.querySelector(".plant_titel").textContent = plant.title;
  //   document.querySelector(".p_description").textContent = plant.description;

  // document.querySelector(".description_img")
}

// ("https://rlrnltlgmzclzpyumxli.supabase.co/rest/v1/plants?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscm5sdGxnbXpjbHpweXVteGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NjIxODUsImV4cCI6MjAyMzMzODE4NX0.C-m5yj5h1tcMxZ45T0rdWHQJW2wXoyWwA_4Ys8ibSS8");
