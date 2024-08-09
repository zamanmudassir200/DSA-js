class Stack {
  data = [];
  currentSize;
  maxSize;

  constructor(maxSize) {
    this.maxSize = maxSize;
    this.currentSize = this.data.length;
    console.log("call", maxSize);
  }
  push(newVal) {
    if (this.currentSize >= this.maxSize) {
      console.log(`Stack is full. You cannot push ${newVal}`);
    } else {
      this.data[this.currentSize] = newVal;
      this.currentSize += 1;
    }
  }
  pop() {
    if (this.currentSize > 0) {
      let lastRemoveItem = this.data[this.currentSize - 1];
      this.currentSize--;
      this.data.length = this.currentSize;
      return lastRemoveItem;
    } else {
      console.log("Stack is already empty");
    }
  }
  reverseStr(str) {
    str = str.split("");
    console.log("splitted string:", str);
    for (let i = 0; i < str.length; i++) {
      this.push(str[i]);
    }
    for (let i = 0; i < str.length; i++) {
      str[i] = this.pop();
    }
    return str.join("");
  }
}

const st1 = new Stack(1000);
console.log(st1.reverseStr("abbaxi"));
console.log("Data:", st1.data);
