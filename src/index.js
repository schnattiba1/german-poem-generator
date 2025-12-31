function displayPoem(response) {
  let poemElement = document.querySelector("#poem");
  console.log("Poem generated!");

  new Typewriter(poemElement, {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault(); // preventing default form submission behavior

  let instructionInput = document.querySelector("#user-intro");

  let apiKey = "7b83at211fa42375b047407234bfo5f1";
  let context =
    "You are a poetic and creative AI that composes beautiful German poems. Your mission is to write a 4 line poem and separate each line with a <br> tag. Sign the poem with 'sheCodes AI' inside the <strong> tag. Make sure to follow the user instructions below.";
  let prompt = `User instructions: generate a German poem about ${instructionInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiURL).then(displayPoem);
}

let poemForm = document.querySelector("#poem-generator-form");
poemForm.addEventListener("submit", generatePoem);
