const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul");

const arr = ingredients.map( (ingredient,idx,arr) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  // debugger;
  itemEl.textContent = ingredient;
  return itemEl;
  
    } )

    list.after(...arr);
  
  console.log(arr);

  // ingredients.map( (ingredient,idx,arr) => {
  //   const itemEl = document.createElement("li");
  //   itemEl.classList.add("item");
  //   itemEl.textContent = arr[arr.length-1-idx];
  //   list.after(itemEl);
     //     } )
  
      