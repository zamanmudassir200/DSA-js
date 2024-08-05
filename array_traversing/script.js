const data = [1, 4, 5, 6, 7, 8, 2, 3, 5, 69, 5];
let el = document.getElementById("element");

el.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getElement(e);
  }
});

const getElement = () => {
  const index = parseInt(el.value);

  if (!isNaN(index) && index >= 0 && index < data.length) {
    alert(data[index]);
    el.value = "";
  } else {
    alert("Please enter a valid index");
    el.value = "";
  }
};
