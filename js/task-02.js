const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients')
console.dir(ingredientsList)

ingredients.forEach((ingredient) => {
  const El = document.createElement('li')
  El.textContent = ingredient;
  El.classList.add('item')
  ingredientsList.append(El)
  console.log(El)
})