document.addEventListener("DOMContentLoaded", () => {
  const amountNumsForm = document.querySelector("#amountNumsForm");
  const amountNums = document.querySelector("#amountNums");
  const sumForm = document.querySelector("#sumForm");
  const sumTable = document.querySelector("#sumTable");
  const sumResult = document.querySelector("#sumResult");
  const LIMIT = 10;

  amountNumsForm.onsubmit = function() {
    if(amountNums.value === "") { // trim() could be used
      generateTable(Math.ceil(Math.random() * LIMIT));
    } else {
      generateTable(amountNums.value); // Type Coercion
    }
    return false;
  }

  function generateTable(slots) {
    sumTable.innerHTML = "";
    for(let idx = 0; idx < slots; idx++) {
      sumTable.innerHTML += `
        <tr>
          <input class="nums" type="number">
        </tr>
      `;
    }
    sumTable.innerHTML += `
      <tr>
        <button>Sum All</button>
      </tr>
    `;

    sumForm.onsubmit = function() {
      const numInputs = document.querySelectorAll(".nums");
      const nums = [];
      for(let numInput of numInputs) {
        nums.push(numInput);
      }
      const sum = nums.reduce((a, b) => a + Math.floor(b.value), 0); // Could be better the use of Number.parseInt()
      sumResult.innerHTML = sum; // Could be better if textContent is used instead
      return false;
    }
  }
});