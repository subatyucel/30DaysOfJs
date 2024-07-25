//1- Declare an empty array;
const emptyArray1 = [];
const emptyArray2 = Array();

//2- Declare an array with more than 5 number of elements
const array = ["subat", 5, [0, 1], "yucel", undefined];

//3-Find the length of your array
console.log(array.length);

//4- Get the first item and the last item of the array
console.log(array[0]);
console.log(array[array.length - 1]);

//5- Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ["subat", 5, [0, 1], "yucel", undefined, null];
console.log(mixedDataTypes.length);

//6-Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

//7- Print the array using console.log()
console.log(itCompanies);

//8- Print the number of companies in the array
console.log(itCompanies.length);

//9-Print the first company and last company
console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length - 1]);

//10- Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const sentenceArray = itCompanies.join(", ");
console.log(`${sentenceArray} are big IT companies.`);

//11- Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes("Amazon")) {
  console.log(`Amazon`);
} else {
  console.log(`company is not found`);
}

//12- Sort the array using sort() method
console.log(itCompanies.sort());

//13- Reverse the array using reverse() method
console.log(itCompanies.reverse());

//14- Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

//15- Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 4, itCompanies.length + 1));

//16- Remove the first IT company from the array
console.log(itCompanies.shift());

//17- Remove the last IT company from the array
console.log(itCompanies.pop());
