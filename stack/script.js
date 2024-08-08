const data = [];
let currentSize = data.length;
let max = 7;

const push = (newVal) => {
  if (currentSize >= max) {
    console.log("The stack is full you cannot add more values", newVal);
  } else {
    data[currentSize] = newVal;
    currentSize += 1;
  }
};

const pop = () => {
  if (currentSize > 0) {
    currentSize -= 1;
    data.length = currentSize;
  } else {
    console.log("Stack is already empty");
  }
};
push(4);
push(5);
push(5);
push(6);
push(10);
push(1000);

pop();
pop();
pop();
pop();
pop();
pop();

console.log(data);
