// const buyApple = (money) => {
//   if (money > 0) {
//     console.log(
//       `I have ${money}Rs ${totalApple}:${totalApple > 1 ? "apples" : "apple"}`
//     );
//     buyMore(money);
//   } else {
//     console.log("i dont have money", money, "RS");
//   }
// };

// const buyMore = (money) => {
//   totalApple++;
//   buyApple(money - 10);
// };

// let money = 100;
// let totalApple = 0;
// buyApple(money);

const test = (x) => {
  // console.log(x);
  if (x > 0) {
    test(x - 1);
  }
  console.log(x);
};

const data = 5;
test(data);
