// const data = [1, 4, 100, 2, 5];

// const insertionSort = (data) => {
//   let i, current, j;
//   console.log("original data:", data);
//   for (i = 1; i < data.length; i++) {
//     current = data[i];
//     j = i - 1;
//     while (j >= 0 && data[j] < current) {
//       data[j + 1] = data[j];
//       j = j - 1;
//       console.log(data);
//     }
//     data[j + 1] = current;
//     console.log("value of i", i, "Final data", data);
//   }
//   console.log("Sorted Arr", data);
// };

// insertionSort(data);

const data = [15, 20, 14, 3, 9, 11, 0, 8];

const insertionSortWithExceptions = (data) => {
  let i, current, j;

  // Store the elements at index 2 and 3 separately
  let el1 = data[2];
  let el2 = data[3];

  console.log("Original data:", data);
  console.log("Elements to skip:", el1, el2);

  // Remove the elements at index 2 and 3
  data.splice(2, 2);

  // Perform insertion sort on the remaining elements
  for (i = 1; i < data.length; i++) {
    current = data[i];
    j = i - 1;

    while (j >= 0 && data[j] > current) {
      data[j + 1] = data[j];
      j = j - 1;
    }

    data[j + 1] = current;
    console.log(`After sorting iteration ${i}:`, data);
  }

  // Append the skipped elements back to the end
  data.push(el1, el2);

  console.log("Final sorted array with exceptions at the end:", data);
};

insertionSortWithExceptions(data);
