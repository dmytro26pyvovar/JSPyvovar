const list = document.querySelector('#categories')
console.log(list)
const items = document.querySelectorAll('li.item')
console.log(items)
items.forEach((item) => {
    const Name = item.querySelector('h2').textContent;
    const Elements = item.querySelectorAll('ul > li');
    console.log(`Category: ${Name}`);
  console.log(`Elements: ${Elements.length}`);
})
