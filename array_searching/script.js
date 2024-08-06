const data = [1, 4, 2, 5, 7, 8, 3, 8, 9, 8, 8, 8];
// const search = 8;
// for (let i = 0; i < data.length; i++) {
//   if (data[i] === searchElement) {
//     console.log(`Element: ${data[i]} found at Index: ${i} `);
//   break;
//   }
// }
const originalData = document.getElementById("originalData");
originalData.innerHTML = data;

const searchElement = document.getElementById("searchElement");
searchElement.addEventListener("click", () => {
  const data = [1, 4, 2, 5, 7, 8, 3, 8, 9, 8, 8, 8];
  let search = document.getElementById("search").value;
  search = parseInt(search);

  let count = 0; // Variable to count occurrences

  for (let i = 0; i < data.length; i++) {
    if (data[i] === search) {
      count++;
      displayResult.innerHTML += `Element: ${data[i]} found at Index: ${i}<br>`;
    } else {
      displayResult.innerHTML = `Searched element is not found in the array`;
    }
  }
  // Display the total count of the found elements
  if (count > 0) {
    displayResult.innerHTML += `<br>Total occurrences: ${count}`;
  }
});
