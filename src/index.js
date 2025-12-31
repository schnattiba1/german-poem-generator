function generatePoem(event) {
  event.preventDefault();
  let poemElement = document.querySelector("#poem");

  new Typewriter(poemElement, {
    strings: "Generating poem...",
    autoStart: true,
    delay: 75,
    cursor: "",
  });

  //poemElement.innerHTML = "Generating poem...";
}

let poemForm = document.querySelector("#poem-generator-form");
poemForm.addEventListener("submit", generatePoem);
