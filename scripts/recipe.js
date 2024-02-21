const parameter = new URLSearchParams(window.location.search);
const id = parameter.get("id");

fetch(`https://rlrnltlgmzclzpyumxli.supabase.co/rest/v1/recipe?id=eq.${id}`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscm5sdGxnbXpjbHpweXVteGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NjIxODUsImV4cCI6MjAyMzMzODE4NX0.C-m5yj5h1tcMxZ45T0rdWHQJW2wXoyWwA_4Ys8ibSS8",
  },
})
  .then((response) => response.json())
  .then(showRecipe);
  
  function showRecipe(recipe) {
    console.log(recipe);
  
    document.querySelector(".hero_img").src = recipe[0].img;
    document.querySelector(".h1").textContent = recipe[0].title_name;
    document.querySelector(".difficulty").textContent = recipe[0].difficulty;
    document.querySelector(".cook").textContent = recipe[0].cooktime;
    document.querySelector(".portions").textContent = recipe[0].portions;
    document.querySelector(".ingredients").textContent = recipe[0].ingredients;
    document.querySelector(".directions").textContent = recipe[0].directions;
  }
  