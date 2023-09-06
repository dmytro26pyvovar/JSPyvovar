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

const Elements =[]

ingredients.forEach((ingredient) => {
  const El = document.createElement('li')
  El.textContent = ingredient;
  El.classList.add('item')
  Elements.push(El);
  console.log(El)
})
ingredientsList.append(...Elements)

