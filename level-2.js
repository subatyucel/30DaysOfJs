//1- Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("Enter base");
let height = prompt("Enter height");
let area = 0.5 * base * height;
console.log(area);

//2- Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = prompt("Enter side a");
let sideB = prompt("Enter side b");
let sideC = prompt("Enter side c");
let perimeter = sideA + sideB + sideC;
console.log(perimeter);

//3-Get radius using prompt and calculate the area of a circle (area = pi x r x r)
let radius = prompt("Enter radius");
const PI = 3.14;
let circleArea = PI * Math.pow(radius, 2);

//4- If the length of your name is greater than 7 say, your name is long else say your name is short.
console.log(name.length > 7 ? "Your name is long" : "Your name is short");

//5- Compare your first name length and your family name length and you should get this output.
console.log(
  firstName.length > lastName.length
    ? `Your first name, ${firstName} is longer than your family name, ${lastName}`
    : `Your first name, ${firstName} is not longer than your family name, ${lastName}`
);
