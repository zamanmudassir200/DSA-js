const data = [];
let currentSize = data.length;
let pushBtn = document.getElementById("push");
let popBtn = document.getElementById("pop");
let displayResult = document.getElementById("displayResult");
const push = () => {
  let newVal = document.getElementById("newVal").value;
  let max = document.getElementById("max").value;

  max = Number(max);
  newVal = Number(newVal);
  console.log(newVal);
  if (currentSize >= max) {
    displayResult.textContent = `"The stack is full you cannot add more values", ${newVal}`;
    console.log("The stack is full you cannot add more values", newVal);
  } else {
    data[currentSize] = newVal;
    currentSize += 1;
    console.log(data);
  }
  displayResult.innerHTML = data;
  console.log(data);
};

const pop = () => {
  if (currentSize > 0) {
    currentSize -= 1;
    data.length = currentSize;
  } else {
    displayResult.textContent = `Stack is already empty`;
  }
};

pushBtn.addEventListener("click", push);
popBtn.addEventListener("click", pop);
