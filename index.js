/**
* Even and Odd Numbers:
* Write a program that displays all even numbers from 1 to 20
* and all odd numbers from 1 to 20.
*/
const evenNumbers = [];
const oddNumbers = [];

for (let i=1; i<=20; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
    } else {
        oddNumbers.push(i);
    }
}

console.log('The even numbers are: ', evenNumbers);
console.log('The odd numbers are: ', oddNumbers);

/**
* Prime Number Check:
* Write a program that checks if a number is prime.
*/
const numberToCheck = 41; // can be replaced with any number
let isPrime = true;

// iterate over all numbers from 2 to the square root of the number being checked
for (let i = 2; i <= Math.sqrt(numberToCheck); i++) {
    if (numberToCheck % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(`The number ${numberToCheck} is prime.`);
} else {
    console.log(`The number ${numberToCheck} is not prime.`);
}

/**
* Sum of Multiples of 3 and 5:
* Calculate the sum of all integers
* up to 100 that are multiples of 3 or 5.
*/
let sum = 0;

for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}

console.log(`The sum of numbers that are multiples of 3 or 5 up to 100 is: ${sum}`);

/**
* Display Array Elements:
* Create an array with some words and use a 'for' loop
* to display each word in the console.
*/
const words = ['programming', 'javascript', 'loop', 'variable', 'function'];

console.log('The words in the array are:');
for (const word of words) {
    console.log(word);
}

