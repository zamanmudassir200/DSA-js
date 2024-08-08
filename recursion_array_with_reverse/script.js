const data = [1, 2, 3, 4, 5, 6, 7, 8];
let temp;
const customReverseArr = (data, start, end) => {
  console.log("data", data);
  if (start < end) {
    temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    customReverseArr(data, start + 1, end - 1);
  }
};

customReverseArr(data, 0, data.length - 1);
