const data = [];
let currentSize = data.length;
let maxSize = 5;

const enqueue = (newVal) => {
  if (currentSize > maxSize) {
    console.log(`Queue is full you can not add ${newVal}`);
  } else {
    data[currentSize] = newVal;
    currentSize += 1;
  }
};
const dequeue = () => {
  if (!isEmpty()) {
    for (let i = 0; i < data.length; i++) {
      data[i] = data[i + 1];
    }
    currentSize -= 1;
    data.length = currentSize;
  } else {
    console.log("Queue is empty");
  }
};

const front = () => {
  if (!isEmpty()) {
    console.log(data[0]);
  } else {
    console.log("Queue is empty");
  }
};
const rear = () => {
  if (!isEmpty()) {
    console.log(data[currentSize - 1]);
  } else {
    console.log("Queue is empty");
  }
};
const isEmpty = () => {
  if (currentSize <= 0) {
    return true;
  } else {
    return false;
  }
};
enqueue(10);
enqueue(20);
enqueue(30);
enqueue(40);
dequeue();
front();
rear();
enqueue(100);
enqueue(1000);
front();
rear();

console.log(data);
