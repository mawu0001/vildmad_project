const parameter = new URLSearchParams(window.location.search);
const id = parameter.get("id");

/* const ingredientsList = recipe[0].ingrediens2;
const ingredientsArray = ingredientsList.split(",");
console.log(ingredientsArray);
 */

fetch(`https://rlrnltlgmzclzpyumxli.supabase.co/rest/v1/recipes?id=eq.${id}`, {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJscm5sdGxnbXpjbHpweXVteGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3NjIxODUsImV4cCI6MjAyMzMzODE4NX0.C-m5yj5h1tcMxZ45T0rdWHQJW2wXoyWwA_4Ys8ibSS8",
  },
})
  .then((response) => response.json())
  .then(showRecipe);

function showRecipe(recipe) {
  console.log("opskrift", recipe);

  document.querySelector(".hero_image").src = recipe[0].img;
  document.querySelector("h1").textContent = recipe[0].title_name;
  document.querySelector(".difficulty").textContent = recipe[0].difficulty;
  document.querySelector(".cook").textContent = recipe[0].cooktime;
  document.querySelector(".portions").textContent = recipe[0].portions;
  document.querySelector(".ingredients_indhold").textContent =
    recipe[0].ingrediens2.forEach(ingrediens);

  document.querySelector(".directions_indhold").textContent =
    recipe[0].walkthrough;
}
