function add (a, b) {
    let result= a + b;
    return result;
}

let run = add(20, 55);
// console.log(run);


// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiNum (a, b, c, d) {
    let numbers = [a, b, c, d];
    let result= 1;
    for (const number of numbers) {
        result *= number
    }
    return result;
}

// console.log(multiNum(2, 5, 4, 3));


// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.


function getNumber(number) {
    if(number % 2 !==0) {
        let oddResult = number * 2;
        return oddResult;
    } else {
        let evenResult = number / 2;
        return evenResult;
    }
}

// console.log(getNumber(44));


// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers) {
    let numLen = numbers.length;
    let sum = 0;
    for (const number of numbers) {
        sum += number

    }
    return  result = sum / numLen;
}

// console.log(make_avg([4, 20, 50, 40]));

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


function count_zero(x) {
    // let numbers = x.length;
    // for (const number of numbers) {
        //     if (number === '0') {
            //         count++
            //     } 
            // }

    let count = 0;
    for (const char of x) {
        if (char === "0") {
            count++;
        }
    }
    return count;
}

let binary = "0001010100";
// console.log(count_zero(binary));


// Task-5

// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(x) {
    if (x % 2 == 0) {
        return 'Even';
    } else {
        return "Odd";
    }
}

//console.log(odd_even(6));


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits.slice(0, 4);
console.log(myBest);
