import { handleForm } from "./handleForm";

export function initializeForm() {
  const myForm = document.getElementById("myForm");
  const textInput = document.getElementById("textInput");
  const outputDiv = document.getElementById("output");
  myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const submittedString = textInput.value;
    if (submittedString) {
      handleForm(submittedString);
    } else {
      outputDiv.textContent = "You did not enter any text.";
    }
  });
}
