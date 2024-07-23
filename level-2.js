/* Write a code which can give grades to students according to theirs scores:
80-100, A
70-79, B
60-69, C
50-59, D
0-49, F 
*/

let score = 50;

if (score >= 80) {
  console.log("a");
} else if (score >= 70 && score < 80) {
  console.log("b");
} else if (score >= 60 && score < 70) {
  console.log("c");
} else if (score >= 50 && score < 60) {
  console.log("d");
} else {
  console.log("f");
}

/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */

let month = "July";
month = month.toLowerCase();

if ((month = "september" || "october" || "november")) {
  console.log("Season is Autumn");
} else if ((month = "december" || "January" || "February")) {
  console.log("Season is Winter");
} else if ((month = "march" || "april" || "may")) {
  console.log("Season is Spring");
} else if ((month = "june" || "july" || "august")) {
  console.log("Season is Summer");
}

// Check if a day is weekend day or a working day. Your script will take day as an input.

let day = "saturday";
day = day.toLowerCase();

if ((day = "saturday" || "sunday")) {
  console.log("It's weekend");
} else {
  console.log("It's working day");
}
