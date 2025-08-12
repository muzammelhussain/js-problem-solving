// // Task 1
// // Write a JavaScript code to reverse the array colors without using the reverse method.
// const colour = ["red", "blue", "white", "green", "orange", "black"];

// const reverseArr = [];

// for (let i = 0; i < colour.length; i++) {
//   reverseArr.unshift(colour[i]);
// }
// console.log(reverseArr);

// const color2 = colour.reverse();
// console.log(color2);

// //solution 2

// const lenColour = colour.length;
// for (let i = 0; i < lenColour; i++) {
//   reverseArr[i] = colour[lenColour - 1 - i];
// }

// //console.log(reverseArr);

// // solution 3

// for (let i = 0; i < lenColour; i++) {
//   console.log(lenColour - 1 - i);

//   reverseArr.push(colour[lenColour - 1 - i]);
// }

// console.log(reverseArr);

const colour = ["red", "blue", "white", "green", "orange", "black"];
const reverseArr = [];

const lenColour = colour.length;

for (let i = 0; i < lenColour; i++) {
  console.log(colour[lenColour - 1 - i]);
  reverseArr.push(colour[lenColour - 1 - i]);
}
console.log(reverseArr);
/**
 *
 *
 *
 */
