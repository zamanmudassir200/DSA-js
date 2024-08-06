const data1 = [1, 2, 3, 5, 6, 7, 8, 9, 1000000000];
const data2 = [10, 20, 30, 40, 50];
const data3 = [];

const data1Ele = document.getElementById("data1");
const data2Ele = document.getElementById("data2");
const data3Ele = document.getElementById("data3");
const mergeArr = document.getElementById("mergeArr");
data1Ele.innerHTML = data1;
data2Ele.innerHTML = data2;
data3Ele.innerText = data3;

mergeArr.addEventListener("click", () => {
  const data1 = [1, 2, 3, 5, 6, 7, 8, 9, 1000000000];
  const data2 = [10, 20, 30, 40, 50];
  const data3 = [];
  for (let i = 0; i < data1.length; i++) {
    data3[i] = data1[i];
  }
  for (let i = 0; i < data2.length; i++) {
    data3[data1.length + i] = data2[i];
  }
  data3Ele.innerHTML = data3;
});

// console.log([...data1, ...data2]);
