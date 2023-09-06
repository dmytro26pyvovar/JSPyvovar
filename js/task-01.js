// const list = document.querySelector('#categories')
// console.log(list)
// const items = document.querySelectorAll('li.item')
// console.log(items)
// items.forEach((item) => {
//     const Name = item.querySelector('h2').textContent;
//     const Elements = item.querySelectorAll('ul > li');
//     console.log(`Category: ${Name}`);
//   console.log(`Elements: ${Elements.length}`);
// })

const list = document.querySelector('#categories');
const Items = list.querySelectorAll('li.item');

console.log(`Number of categories: ${Items.length}`);

Items.forEach((Item) => {
  const Name = Item.firstElementChild.textContent;
  const Elements = Item.lastElementChild.querySelectorAll('li');

  console.log(`Category: ${Name}`);
  console.log(`Elements: ${Elements.length}`);
});