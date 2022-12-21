const menuItemsByClass = document.querySelectorAll(".item");
console.log(menuItemsByClass);
// console.log(menuItemsByClass[0].textContent);
console.log(`Number of categories: ${menuItemsByClass.length}`);

// const listFirstChild = [];
// for (const menu of menuItemsByClass){

// listFirstChild.push(menu.firstChild) ;
// console.log(`Category: ${listFirstChild}`);
// }

for (const menu of menuItemsByClass) {
  const menuItemsTextEl = menu.querySelector("h2");
  const menuItemsEl = menu.querySelectorAll("li");
  console.log(`Category: ${menuItemsTextEl.textContent}`);
  console.log(`Elements: ${menuItemsEl.length}`);
}
// for (const menu of menuItemsByClass){

//     const firstChild = menu.firstChild;
// console.log(firstChild);

// const listFirstChild = menu.children;
// console.log(listFirstChild);
// }
