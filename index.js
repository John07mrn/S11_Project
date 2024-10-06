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

/**
* Palindrome Check:
* Write a program that checks if a word
* is a palindrome (reads the same from left to right and right to left, ignoring spaces and case differences)
*/
let wordToCheck = 'a bba';
wordToCheck = wordToCheck.toLowerCase().replace(/\s/g, ''); // Convert to lowercase and remove spaces
const reverse = wordToCheck.split('').reverse().join('');
const isPalindromeMessage = `The word ${wordToCheck} is a palindrome`;
const notPalindromeMessage = `The word ${wordToCheck} is not a palindrome`;
wordToCheck === reverse ? console.log(isPalindromeMessage) : console.log(notPalindromeMessage);

/**
 * Calculate the sum of the squares of numbers from 1 to 10.
 */
let sumSquares = 0;

for (let i = 1; i <= 10; i++) {
    sumSquares += i * i;
}

console.log(`The sum of the squares of numbers from 1 to 10 is: ${sumSquares}`);

/**
 * Determine Parity:
 * Given an array const nums = [1, 12, 30, 21]
 * Write a program that displays a message
 * indicating whether each number in the array is even or odd.
 */
const nums = [1, 12, 30, 21];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        console.log(`${nums[i]} is an even number.`);
    } else {
        console.log(`${nums[i]} is an odd number.`);
    }
}

/**
 * Prime Numbers in Range:
 * Given two numbers x = 12, y = 35, display all prime numbers between x and y.
 */
const x = 12;
const y = 35;
console.log(`Prime numbers in the range ${x} - ${y}:`);
for (let i = x; i <= y; i++) {
    let prime = true;
    for (let j = 2; j <= Math.sqrt(numberToCheck); j++) {
        if (i % j === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(i);
    }
}

/**
 * Display Multiplication Table:
 * Display the multiplication table for numbers from 1 to 10.
 */
console.log("Multiplication table:");

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log(); // Add a blank line between each row for clarity
}

/**
 * FizzBuzz Game:
 * Write a program that displays the numbers from 1 to 50.
 * For every multiple of 3, display "Fizz".
 * For every multiple of 5, display "Buzz".
 * For numbers that are multiples of both 3 and 5, display "FizzBuzz".
 */
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
