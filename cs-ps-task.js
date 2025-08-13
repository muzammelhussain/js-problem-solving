// Problem-01 : Calculate the cash-out Charge

function cashOut(money) {
  if (typeof money !== "number" || money < 0) {
    return "Invalid";
  }
  let amount = (money * 1.75) / 100;
  return amount.toFixed(2);
}

const money = -2;
console.log(cashOut(money));

//Problem-02 : Valid Bangladeshi Number

function ValidContact(contact) {
  if (typeof contact !== "string") {
    return "invalid";
  }
  if (
    contact.length == 11 &&
    contact.startsWith("01") == true &&
    contact.includes(" ") != true
  ) {
    return true;
  } else {
    return false;
  }
}

const contact = "063222 00000";
console.log(ValidContact(contact));

//Problem-03 : Admission Success (Will He Succeed?)

function willSuccess(numbers) {
  if (typeof numbers === "string" || typeof numbers === "number") {
    return "Invalid";
  }
  let underFifty = [];
  let upFifty = [];
  for (const number of numbers) {
    if (number >= 50) {
      upFifty.push(number);
    } else {
      underFifty.push(number);
    }
  }
  let upLength = upFifty.length;
  let underLength = underFifty.length;
  if (underLength >= upLength) {
    return false;
  } else {
    return true;
  }
}

const examScore = [90, 99, 87, 34, 49];
console.log(willSuccess(examScore));

//Problem-04: Valid Proposal

function validProposal(person1, person2) {
  let ageGap = Math.abs(person1.age - person2.age);
  if (typeof person1 === "string" || typeof person2 === "string") {
    return "Invalid";
  }
  if (person1.gender === person2.gender || ageGap > 7) {
    return false;
  }
  return true;
}

const person1 = { name: "bjoy", gender: "male", age: 32 };
const person2 = "Mizan";

console.log(validProposal(person1, person2));

//Problem-05: Let’s Calculate Total Sleep Time

function calculateSleepTime(times) {
  if (typeof times !== "number") {
    return "Invalid";
  }
  let totalMinutes = 0;
  for (const time of times) {
    totalMinutes += time;
  }

  let hour = Math.floor(totalMinutes / 3600);
  let remaining = totalMinutes % 3600;
  let minutes = Math.floor(remaining / 60);
  remaining = remaining % 60;
  let seconds = remaining;

  let objTime = {
    "hour:": hour,
    "minute:": minutes,
    "second:": seconds,
  };
  return objTime;
}

const times = [100, 3800, "90"];
console.log(calculateSleepTime(times));
