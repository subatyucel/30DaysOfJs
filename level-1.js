//1- Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "subat";
lastName = "Yucel";
age = 22;
isMarried = false;
console.log(typeof firstName, typeof age, typeof isMarried);

//2- Check if type of '10' is equal to 10
console.log(typeof "10" == typeof 10);

//3- Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") == 10);

/*4- Boolean value is either true or false.
      a- Write a JavaScript statement which provide truthy value.
      b- Write a JavaScript statement which provide falsly value.
*/

console.log(4 > 3);
console.log(4 < 3);

//5* Use the Date object to do the following activities
let date = new Date();

//What is the year today?
console.log(date.getFullYear());

//What is the month today as a number?
console.log(date.getMonth());

//What is the date today?
console.log(date.getDate());

//What is the day today as a number?
console.log(date.getDay());

//What is the hours now?
console.log(date.getHours());

//What is the minutes now?
console.log(date.getMinutes());

//Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(date.getTime());
