const mostOccCharInStr = (str) => {
  let obj = {};
  let maxkey = "";
  for (let ch of str) {
    if (!obj[ch]) {
      obj[ch] = 0;
    }
    obj[ch]++;
    if (maxkey === "" || obj[ch] >= obj[maxkey]) {
      maxkey = ch;
    }
  }
  console.log(maxkey);
};

mostOccCharInStr("hello o");
