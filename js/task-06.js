const textInput = document.querySelector("input");

textInput.addEventListener("blur", (event) => {
  textInput.textContent = event.currentTarget.value;
  console.log(textInput);
  
  if (textInput.textContent.length !== Number(textInput.dataset.length)) {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  } else {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
    
  }
  
});
