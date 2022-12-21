let counterValue = 0;

const decrListenerBtn = document.querySelector('[data-action="decrement"]');
const incrListenerBtn = document.querySelector('[data-action="increment"]');
const valueCounter = document.querySelector("span");

const onDecrClick = () => {
  counterValue--;
  valueCounter.innerHTML = counterValue;
  console.log("Button was clicked");
  console.log(counterValue);
};

const onIncrClick = () => {
  counterValue++;
  valueCounter.innerHTML = counterValue;

  console.log("Button was clicked");
  console.log(counterValue);
};

decrListenerBtn.addEventListener("click", onDecrClick);
incrListenerBtn.addEventListener("click", onIncrClick);
