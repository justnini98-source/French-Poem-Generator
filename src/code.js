function displayPoem (response) {

console.log("generated poem");
    new Typewriter('#poem', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor:'',
});

}


function generatePoem(event) {
    event.preventDefault();

let userInstructions = document.querySelector("#user-instructions");
let apiKey="8f60tcc18bc942bocf922c235cb83f4a";
let prompt=`User instructions: Create a poem with ${userInstructions.value}`;
let context="You are a poet creating four-line poems in French using the prompt the user has given you. Do not engage with sexual or foul language though. Keep it kid-friendly. Write out the poem using <br/> with each new line. Sign the poem at the bottom with SheCodes AI. ";
let apiURL=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

 let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a French poem about ${userInstructions.value}</div>`;

axios.get(apiURL).then(displayPoem);

console.log("generating poem");
console.log(`prompt: ${prompt}`);
console.log(`context ${context}`);


}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);