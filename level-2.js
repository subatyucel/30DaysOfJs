//1- Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log(
  "'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

//2- Using console.log() print out the following quote by Mother Teresa: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);

//3- Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log("10" === 10);
console.log(Number("10") === 10);

//4- Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat("9.8") === 10);
console.log(Math.round(parseFloat("9.8")) === 10);

//5- I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence2 = "I hope this course is not full of jargon.";
console.log(sentence2.includes("jargon"));

//6- Generate a random number between 0 and 100 inclusively.
let random = Math.floor(Math.random() * 101);
console.log(random);

//7- Generate a random number between 50 and 100 inclusively.
random = Math.floor(Math.random() * 51 + 50);
console.log(random);

//8- Generate a random number between 0 and 255 inclusively.
random = Math.floor(Math.random() * 256);
console.log(random);

//9- Access the 'JavaScript' string characters using a random number.
let word3 = "JavaScript";
random = Math.floor(Math.random() * word3.length);
console.log(word3[random]);
