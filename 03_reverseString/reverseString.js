//--! Doesn't work
// const reverseString = function (word) {
//   if (word === "") return "";
//   let newString = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     newString += word[i];
//     return newString;
//   }
// };
//--!
const reverseString = function (word) {
  if (word === "") {
    return "";
  } else {
    return word.split("").reverse().join("");
  }
};

// Do not edit below this line
module.exports = reverseString;
