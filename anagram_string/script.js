const anagram = (str1, str2) => {
  let ObjStr1 = {};
  if (str1.length !== str2.length) {
    return `Strings length are not equal`;
  }
  for (let ch of str1) {
    ObjStr1[ch] = (ObjStr1[ch] || 0) + 1;
  }
  console.log(ObjStr1);
  for (let ch of str2) {
    if (!ObjStr1[ch]) {
      return `Strings are not Anagram`;
    }
    ObjStr1[ch]--;
  }
  return "Strings are Anagram";
};
console.log(anagram("mudassir", "assirmud"));
