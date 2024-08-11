const data = [1, 1000, 5, 20, 100, 5];

// Bubble sorting (ascending order)
for (let i = 0; i < data.length - 1; i++) {
  for (let j = 0; j < data.length - 1 - i; j++) {
    if (data[j] > data[j + 1]) {
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}

console.log(data);

const recursiveBinarySearch = (data, start, end, find) => {
  if (start > end) {
    return `Element "${find}" not found`;
  }

  let mid = Math.floor((start + end) / 2);

  if (data[mid] === find) {
    return `Element "${find}" found at index "${mid}"`;
  } else if (data[mid] < find) {
    return recursiveBinarySearch(data, mid + 1, end, find);
  } else {
    return recursiveBinarySearch(data, start, mid - 1, find);
  }
};

// Example usage
let find = 20;
let result = recursiveBinarySearch(data, 0, data.length - 1, find);
console.log(result);

// Test with an element not in the array
find = 42;
result = recursiveBinarySearch(data, 0, data.length - 1, find);
console.log(result);
