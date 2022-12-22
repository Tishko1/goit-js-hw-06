const menuItemsByClass = document.querySelectorAll(".item");
console.log(menuItemsByClass);

console.log(`Number of categories: ${menuItemsByClass.length}`);

for (const menu of menuItemsByClass) {
  const menuItemsTextEl = menu.querySelector("h2");
  const menuItemsEl = menu.querySelectorAll("li");
  console.log(`Category: ${menuItemsTextEl.textContent}`);
  console.log(`Elements: ${menuItemsEl.length}`);
}
