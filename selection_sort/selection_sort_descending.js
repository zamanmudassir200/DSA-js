const data = [200, 100, 50, 1, 10099, 1000, -1];

const selectionSort = (data) => {
  for (let i = data.length - 1; i >= 0; i--) {
    let minId = i;
    for (let j = i - 1; j >= 0; j--) {
      if (data[j] < data[minId]) {
        minId = j;
      }
    }
    let temp = data[minId];
    data[minId] = data[i];
    data[i] = temp;
    console.log(data);
  }
  return data;
};

selectionSort(data);
