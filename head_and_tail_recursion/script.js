const add = () => {
  console.log(5 + 2);
};
const sub = () => {
  add();
};
const div = () => {
  sub();
};
const mult = () => {
  div();
};

const operation = () => {
  mult();
};

operation();
// head and tail recursion
const test = (x) => {
  console.log(x); // head recursion
  if (x > 0) {
    test(x - 1);
  }
  //   console.log(x); // tail recursion
};

const data = 5;
test(data);
