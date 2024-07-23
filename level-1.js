//1- Get user input using prompt("Enter your age:"). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let userAge = prompt("Enter your age");

if (userAge >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log(`You need ${18 - userAge} years  to turn 18 `);
}

//2- Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt("Enter your age:") to get the age as input.
let myAge = 22;
if (userAge > myAge) {
  console.log(`You are ${userAge - myAge} years older than me`);
} else {
  console.log(`I'm ${myAge - userAge} years older than you`);
}

//3- If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways using if else - ternary operator.
let a = 4,
  b = 3;

if (a > b) {
  console.log(`a(${a}) is greater than b(${b})`);
} else {
  console.log(`b(${b}) is greater than a(${a})`);
}

a > b
  ? console.log(`a(${a}) is greater than b(${b})`)
  : console.log(`b(${b}) is greater than a(${a})`);

//4-Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let number = 5;
if (number % 2 === 0) {
  console.log("This number is even");
} else {
  console.log("this number is odd");
}
