//Example of includes.
const friends = ['salam','kalam', 'galam', 'ashlam', 'khelam'];

console.log(friends.includes('kalam'));
console.log(friends.includes('khelam'));


if(friends.includes('salam')) {
    console.log('we wil go for party with ' + friends[0]);
} else {
    console.log('no food, we are fasting');

}

//Example of index.

const numbers = [25, 51, 45, 56, 66];
console.log(numbers);
console.log(numbers[3]);


numbers[3] = 999;
console.log(numbers[3]);

// Example of indexOf 

let greetings = ['hello', 'hi', 'how are you', 'go', 'ryans'];
console.log(greetings.indexOf('hi'));

//Example of isArray

const sublings = ['muhin', 'tuhin', 'mahin', 'momin'];
const text = 'hello world';
const number = 123;
const num = [];

console.log(Array.isArray(sublings));
console.log(Array.isArray(num));
console.log(Array.isArray(text));
console.log(Array.isArray(number));


// Example of length.js

const counts = [1, 55, 65, 45, 23, 45, 89, 75, 62, 49];
console.log(counts.length);


// Example of pop

const bondhu = ['muhin', 'tuhin', 'mahin', 'momin'];

bondhu.push('salam');
console.log(bondhu);

const out1 = bondhu.pop();
console.log(bondhu);

const out2 = bondhu.pop();
console.log(bondhu);

console.log(out1, out2);


// Example of shift-unshift

const shibir = ['muhin', 'tuhin', 'mahin', 'momin'];
console.log(shibir);
shibir.shift();
console.log(shibir);

shibir.unshift('salam');
console.log(shibir);
