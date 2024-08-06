const deleteBtn = document.getElementById("deleteBtn");
let displayResult = document.getElementById("displayResult");
const data = [4, 5, 6, 10, 100, 2, 4, 5];

displayResult.textContent = data;

deleteBtn.addEventListener("click", () => {
  const data = [4, 5, 6, 10, 100, 2, 4, 5];
  let position = document.getElementById("position").value;
  console.log("Original data", data);
  position = parseInt(position);
  if (position >= 0 && position < data.length) {
    for (let i = position; i < data.length - 1; i++) {
      data[i] = data[i + 1];
    }
    data.length = data.length - 1;
    displayResult.innerHTML = data;
    console.log("Deleted data", data);
  } else {
    alert("Please enter valid position");
  }
});
