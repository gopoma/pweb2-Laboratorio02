document.addEventListener("DOMContentLoaded", () => {
  const invertedForm = document.querySelector("#invertedForm");
  const word = document.querySelector("#word");
  const inverted = document.querySelector("#inverted");

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