const data = [1, 100, 5, 30, 53, 5];
// bubble sorting (ascending order)
for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length - 1 - i; j++) {
    if (data[j] > data[j + 1]) {
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}
let start = 0;
let end = data.length - 1;
let find = 1;
let position = undefined;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  if (data[mid] === find) {
    position = mid;
    break;
  } else if (data[mid] < find) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(
  position !== undefined
    ? `Element found at index ${position}`
    : "Element not found"
);
