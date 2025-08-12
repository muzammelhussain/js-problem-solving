// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(x) {
  let fahren = x * (9 / 5) + 32;
  return fahren;
}

let tem = celsiusToFahrenheit(2);
console.log(tem);

/**
 * Task-2:
   You are given an array of numbers. Count how many times the a number is repeated in the array.
 */
//solution 1

let arr = [9, 4, 6, 12, 32, 12, 6, 4, 12];

function findCommonNum(x, arr) {
  let countNum = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === x) {
      countNum.push(i);
    }
  }
  return countNum.length;
}
let number = findCommonNum(12, arr);
console.log(number);

//Solution 2

let arr2 = [9, 4, 6, 12, 32, 12, 6, 4, 12];

function findCommonNum2(x, arr2) {
  return arr2.filter((num) => num === x).length;
}

console.log(findCommonNum2(1, arr2));

/**
 * Task-3:
   Write a function to count the number of vowels in a string.
 */
// Solution 1

function findVowel(x) {
  let getVowel = [];
  for (let i = 0; i <= x.length; i++) {
    if (x[i] === "a") {
      getVowel.push(i);
    } else if (x[i] === "e") {
      getVowel.push(i);
    } else if (x[i] === "i") {
      getVowel.push(i);
    } else if (x[i] === "o") {
      getVowel.push(i);
    } else if (x[i] === "u") {
      getVowel.push(i);
    }
  }
  return getVowel.length;
}

let word = findVowel("muhin");
console.log(word);

// Solution 2

function findVowel2(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

let words = findVowel2("muhinUUUUU");
console.log(words);

/**
 * Task-4:
   Write a function to find the longest word in a given string.
 */

function longestWord(str) {
  let words = str.split(" ");
  let longest = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
      0;
    }
  }

  return longest;
}

let sentence = "I am learning Programming to become a programmer";
console.log(longestWord(sentence));

/**
 * Task-5:
   Generate a random number between 10 to 20. 
 */

let ranNum = Math.floor(Math.random() * (20 - 10 + 1) + 10);
console.log(ranNum);

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomBetween(30, 50));
