// Task -1:
// Find the lowest number in the array below.

const heights2 = [165, 452, 582, 56, 45, 632, 451, 652];

function getMin(numbers) {
  let num = numbers[0];
  for (const number of numbers) {
    if (num > number) {
      num = number;
    }
  }
  return num;
}

const min = getMin(heights2);
console.log(min);

// Task -2:
// Find the friend with the smallest name.

// this function has error that when it comes to small name then it dose not come to the smallest name.

const friends = ["rahim", "robin", "mon", "rafi", "ro", "rashed"];

function getSmallName(names) {
  let smallestName = names[0];
  for (const name of names) {
    if ((smallestName) => name) {
      smallestName = name;
    }
  }
  return smallestName;
}

let smallestName = getSmallName(friends);
console.log(smallestName);

// Task-3:
// Your task is to calculate the total budget required to buy electronics:
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function totalBudget(a, b, c) {
  let laptopQun = a;
  let laptopTotalAmount = laptopQun * 35000;
  let tabletQun = b;
  let tabletTotalAmount = tabletQun * 15000;
  let mobileQun = c;
  let mobileTotalAmount = mobileQun * 20000;
  let totalAmount = laptopTotalAmount + tabletTotalAmount + mobileTotalAmount;
  return totalAmount;
}

console.log(totalBudget(56, 3, 2));

/**
 * Task-4:
You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
 */
// Solution 1
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones) {
  let totalPrice = 0;
  for (const phone of phones) {
    totalPrice += phone.price;
  }

  return totalPrice / phones.length;
}

console.log(findAveragePhonePrice(phones));

//Solution 2

function findAveragePhonePrice(phones) {
  const totalPrice = phones.reduce((sum, phone) => sum + phone.price, 0);
  return totalPrice / phones.length;
}
// I have to clear the concept of reduce function.

/**
 * Task -5: (Hard)
For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
 */
// Solution -1
const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function calculateTotalSalary(employees) {
  let totalSalary = 0;
  let employee1 = employees[0].experience;
  let employee2 = employees[1].experience;
  let employee3 = employees[2].experience;
  let employee4 = employees[3].experience;
  let salaryEmployee1 = employees[0].starting;
  let salaryEmployee2 = employees[1].starting;
  let salaryEmployee3 = employees[2].starting;
  let salaryEmployee4 = employees[3].starting;

  for (let i = 0; i < employee1; i++) {
    salaryEmployee1 += 5000;
  }

  for (let i = 0; i < employee2; i++) {
    salaryEmployee2 += 7000;
  }

  for (let i = 0; i < employee3; i++) {
    salaryEmployee1 += 1000;
  }

  for (let i = 0; i < employee4; i++) {
    salaryEmployee1 += 4000;
  }
  totalSalary =
    salaryEmployee1 + salaryEmployee2 + salaryEmployee3 + salaryEmployee4;
  return totalSalary;
}

console.log(calculateTotalSalary(employees));

// Solution -2

const employees2 = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function calculateTotalSalary(employees2) {
  let totalSalary = 0;

  for (const emp of employees2) {
    const currentSalary = emp.starting + emp.experience * emp.increment;
    totalSalary += currentSalary;
  }

  return totalSalary;
}

console.log(calculateTotalSalary(employees2)); // Total salary for all employees
