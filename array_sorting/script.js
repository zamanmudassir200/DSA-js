let data = [1001, 100, 32, 400, 51, 211, 4];

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data.length; j++) {
    if (data[j] >= data[j + 1]) {
      let temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
      console.warn(data);
    }
  }
}
console.log(data);
