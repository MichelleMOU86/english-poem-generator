function generatePoem(event) {
  event.preventDefault();

  let poemField = document.querySelector("#poem");
  poemField.innerHTML = "Getting your poem...please wait.";
  let instructionInput = document.querySelector("#instruction");
  let apiKey = "f86d964a4t362c8065oa46bbf2320366";
  let context =
    "You are an English historian and you know how to write beautiful poetry.";
  let prompt = `Generate a short poem in English about ${instructionInput.value}. Separate each line with a line break.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showPoem);
}

function showPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
