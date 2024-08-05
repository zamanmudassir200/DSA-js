const insertElement = () => {
  const data = [1, 54, 5, 9, 2];

  let position = document.getElementById("position").value;
  let newElement = document.getElementById("newElement").value;

  console.log(position);
  console.log(newElement);
  if (position !== "" && newElement !== "") {
    position = parseInt(position); // Convert position to an integer
    newElement = parseInt(newElement);
    if (position >= 0 && position < data.length) {
      for (let i = data.length - 1; i >= 0; i--) {
        if (i >= position) {
          data[i + 1] = data[i];
          if (i === position) {
            data[i] = newElement;
          }
        }
      }
      console.log(data);
    } else {
      alert(
        `Please entered valid position. The enter position ${position} is not available in given array`
      );
    }
  } else {
    alert("Please fill both fields");
  }
};
