const textInput = document.querySelector("input");

textInput.addEventListener("blur", (event) => {
    textInput.textContent = event.currentTarget.value;
    console.log(textInput);
    // console.log(textInput.textContent.length);
    // console.log(Number(textInput.dataset.length));
    // console.log(textInput.textContent.length !== Number(textInput.dataset.length));
  if(textInput.textContent.length !== Number(textInput.dataset.length)){
     textInput.classList.add("invalid");
     textInput.classList.remove("valid");
  }else{
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
    // textInput.classList.replace("invalid","valid");
  }
  // event.currentTarget.reset(); 
  });