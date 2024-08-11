const recursiveBinarySearch = (data, start, end, findEl) => {
  if (start > end) {
    return `Element "${findEl}" not found`;
  }

  let mid = Math.floor((start + end) / 2);

  if (data[mid] === findEl) {
    return `Element "${findEl}" found at index "${mid}"`;
  } else if (data[mid] < findEl) {
    return recursiveBinarySearch(data, mid + 1, end, findEl);
  } else {
    return recursiveBinarySearch(data, start, mid - 1, findEl);
  }
};

const startSearch = () => {
  const data = [1, 1000, 5, 20, 100, 5];
  const findEl = parseInt(document.getElementById("findEl").value);
  if (isNaN(findEl)) {
    console.log("Please enter a valid number");
    return;
  }

  // Bubble sort (ascending order)
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }

  const result = recursiveBinarySearch(data, 0, data.length - 1, findEl);
  console.log(result);
};

document
  .getElementById("searchEleRecursiveApp")
  .addEventListener("click", startSearch);
