const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://rlrnltlgmzclzpyumxli.supabase.co/rest/v1/plants?id=eq.${id}`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscm5sdGxnbXpjbHpweXVteGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NjIxODUsImV4cCI6MjAyMzMzODE4NX0.C-m5yj5h1tcMxZ45T0rdWHQJW2wXoyWwA_4Ys8ibSS8",
  },
})
  .then((response) => response.json())
  .then(showPlant);

function showPlant(plant) {
  console.log(plant);

  document.querySelector(".plant_titel").textContent = plant[0].title;
  document.querySelector(".p_description").textContent = plant[0].description;
  document.querySelector(".hero_img_plant").src = plant[0].plant_heroimg;
  document.querySelector(".description_img").src = plant[0].profile_image;
  document.querySelector(".p_where").textContent = plant[0].Whereto;
  document.querySelector(".p_how").textContent = plant[0].pickit;
  document.querySelector(".p_basket").textContent = plant[0].spotit;
}

// ("https://rlrnltlgmzclzpyumxli.supabase.co/rest/v1/plants?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscm5sdGxnbXpjbHpweXVteGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NjIxODUsImV4cCI6MjAyMzMzODE4NX0.C-m5yj5h1tcMxZ45T0rdWHQJW2wXoyWwA_4Ys8ibSS8");
