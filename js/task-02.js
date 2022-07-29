const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("ul#ingredients");
const ingredientsArray = [];

ingredients.forEach(element => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = element;
  ingredientItem.classList.add("item");

  ingredientsArray.push(ingredientItem);

});

ingredientsList.append(...ingredientsArray);

