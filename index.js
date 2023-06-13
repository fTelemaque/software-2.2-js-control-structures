//Write JS code that solve the following problems
//Q1. Using an if-else statement, determine if a number is divisible by 3, by 5, or both.

let q1test = 15;
let divisorA = 3;
let divisorB = 5;

if (q1test % divisorA === 0 && q1test % divisorB === 0) {
    console.log(`${q1test} is divisible by 3, 5 and both.`);
} else {
    console.log(`${q1test} is not divisible by 3, 5 and both.`)
}


//Q2. Using an if-else statement, determine if a year is a leap year or not.
//Research what are the conditions to be considered a leap year.

let year = 1999;
// let year = 2000;
// let year = 1900;
// let year = 2024;

if (year % 4 === 0 || year % 100 === 0 && year % 400 === 0) {
    console.log(`Correct, ${year} is a leap year.`);
} else {
    console.log(`Oops, ${year} is not a leap year.`);
}


//Q3. Use a loop to print all the numbers from 1 to 100 that are divisible by 3 or 4.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 4 === 0) 
        console.log(i);
}
    