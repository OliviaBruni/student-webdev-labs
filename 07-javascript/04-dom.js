// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area
document.getElementById("copy").addEventListener("click", copyInput);
function copyInput() {
  const inputVal = document.getElementById("userInput1").value;
  document.querySelector("div.output").textContent = inputVal;
}

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const textBox = document.getElementById("userInput2");
const outText = document.createElement("p");
const container = document.getElementById("inputEventExample");

// add an event listener on the target element
textBox.addEventListener("change", outputText);

// callback function to handle event
function outputText() {
  outText.textContent = textBox.value;
  container.appendChild(outText);
}
