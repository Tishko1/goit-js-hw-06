const sizeInput = document.querySelector("input");
const textInput = document.querySelector("#text");

sizeInput.addEventListener("input", (event) => {
  textInput.style.fontSize = event.currentTarget.value + "px";
});
