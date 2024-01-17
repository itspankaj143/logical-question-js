//! find the maximum occuring character in the string
// const str = "hhhello worldddddd";
// const map = {};
// str.split("").forEach((ele) => {
//   map[ele] = map[ele] ? map[ele] + 1 : 1;
// });
// console.log(map)

// let max = 0;
// char = str[0];
// for (let k in map) {
//   //console.log(k) // key
//   // console.log(map[k]) // value
//   if (map[k] > max) {
//     max = map[k];
//     char = k;
//   }
// }
// console.log(char);

// const str = "computer";
// const arr = str.split("");
// const len = arr.length;
// for (let i = 0; i < len / 2; i++) {
//   let temp = arr[i];
//   arr[i] = arr[len - 1 - i];
//   arr[len - 1 - i] = temp;
// }
// console.log(arr.join(''));

const arr = [19, 70, 65, 4, 8, 5, 0, 21, 7, 22, 1, 4];
let max = -Infinity;
let secondMax = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if (arr[i] > secondMax && arr[i] !== max) {
    secondMax = arr[i];
  }
}
console.log(secondMax)