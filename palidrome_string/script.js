//? Method 1
const isPalindrome = (str) => {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  if (reverseStr === str) {
    return `String is palindrome`;
  } else {
    return `String is not a palindrome`;
  }
};

console.log(isPalindrome("civic"));

//? Method 2
// const isPalindrome = (str) => {
//   let start = 0;
//   let end = str.length - 1;

//   while (end > start) {
//     if (str[start] !== str[end]) {
//       return `String is not a palindrome`;
//     }
//     start++;
//     end--;
//   }
//   return `String is palindrome`;
// };

// console.log(isPalindrome("lvel"));
