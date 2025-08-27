// SELECTING ELEMENTS
const textareaConatiner = document.getElementById("textarea");
const totalCounterDiv = document.getElementById("total-counter");
const remainingCounterdiv = document.getElementById("remaining-counter");
// DECLARING UPADTE COUNTER FUNCTION
function updateCounter() {
  totalCounterDiv.innerText = textareaConatiner.value.length;
  remainingCounterdiv.innerText =
    textareaConatiner.getAttribute("maxLength") - textareaConatiner.value.length;
}
// ADDING EVENT LISTNER 
textareaConatiner.addEventListener("keyup", () => {
// CALLING UPDATE COUNTER FUNCTION
  updateCounter();
});
// CALLING UPDATE COUNTER FUNCTION
updateCounter()