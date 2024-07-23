// Write a program which tells the number of days in a month.

let month2 = "January";
month2 = month2.toLowerCase();

switch (month2) {
  case "january":
    console.log("31 days");
    break;

  case "february":
    console.log("28 days");
    break;

  case "march":
    console.log("31 days");
    break;

  case "april":
    console.log("30 days");
    break;

  case "may":
    console.log("31 days");
    break;

  case "june":
    console.log("30 days");
    break;

  case "july":
    console.log("31 days");
    break;

  case "august":
    console.log("31 days");
    break;

  case "september":
    console.log("30 days");
    break;

  case "october":
    console.log("31 days");
    break;

  case "november":
    console.log("30 days");
    break;

  case "december":
    console.log("31 days");
    break;

  default:
    console.log("please enter a valid month");
}
