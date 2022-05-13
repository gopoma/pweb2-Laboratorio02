document.addEventListener("DOMContentLoaded", () => {
  const invertedForm = document.querySelector("#invertedForm");
  const word = document.querySelector("#word");
  const btnInvert = document.querySelector("#btnInvert");
  const inverted = document.querySelector("#inverted");

  btnInvert.disabled = true;
  word.onkeyup = function() {
    if(word.value.length > 0) {
      btnInvert.disabled = false;
    } else {
      btnInvert.disabled = true;
    }
  }

  function invertWord(word) {
    let invertedWord = "";
    for(let idx in word) {
      invertedWord = word[idx] + invertedWord;
    }
    return invertedWord;
  }

  invertedForm.onsubmit = function() {
    inverted.textContent = invertWord(word.value);
    return false;
  }
});