function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

let isLeap = isLeapYear(2024);
//console.log(isLeap);

function isLeapYear2(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

isLeap = isLeapYear2(2014);
//console.log(isLeap);
isLeap = isLeapYear2(2243);
//console.log(isLeap);

function oddAverage(numbers) {
  let odd = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odd.push(number);
    }
  }
  let sum = 0;
  for (const number of odd) {
    sum = sum + number;
  }
  let oddLen = odd.length;
  let average = sum / oddLen;
  return average.toFixed(2);
}
const numbers = [12, 45, 25, 65, 46, 38, 49, 79, 61, 27, 39, 5];
const avg = oddAverage(numbers);
//console.log("average of the odd numbers is: ", avg);

function noDuplicate(arr) {
  const unique = [];
  for (const item of arr) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

const names = [
  "abul",
  "kabul",
  "sabul",
  "bokul",
  "abul",
  "sabul",
  "mukul",
  "kabul",
  "ratul",
];

const uniqueArr = noDuplicate(names);
console.log(uniqueArr);
