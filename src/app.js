function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: '',
    delay: 1,
  });
}

function generate(event) {
  event.preventDefault();
  let apiKey = "cbbfb900d7a3c5f058f2a44a54t3o340";
  let context =
    "Your mission is to generate a short 4 line poem in basic HTML, make sure to follow the user instructions, sign the poem it by SheCodes AI 🤖";
  let instructionsInput = document.querySelector("#instructions");
  let prompt = instructionsInput.value;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?context=${context}&prompt=${prompt}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
	poemElement.style.display = 'block';
  poemElement.innerHTML = `Generating a poem about ${instructionsInput.value}..`;
  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#poem-generator");
let poemElement = document.querySelector("#poem");
poemForm.addEventListener("submit", generate);
