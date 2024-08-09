const data = [];
let currentSize = data.length;

const push = (newVal) => {
  data[currentSize] = newVal;
  currentSize += 1;
};
const pop = () => {
  let lastRemovedItem = data[currentSize - 1];
  currentSize -= 1;
  data.length = currentSize;
  return lastRemovedItem;
};
const reverseStr = (item) => {
  for (let i = 0; i < item.length; i++) {
    push(item[i]);
  }
  for (let i = 0; i < item.length; i++) {
    item[i] = pop();
  }
};

let str = "abbaxi";
str = str.split("");
reverseStr(str);
console.log(str.join(""));
console.log("Data:", data);

// const test = (a) => {
//   return (a[0] = 200);
// };

// let a = [20];
// console.log(test(a)); // this will only work on arrays and objects call by reference
