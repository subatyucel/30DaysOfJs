//1- 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let ali =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let pattern = /love/gi;

console.log(ali.match(pattern).length);

//2- Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let becauseSentence =
  "You cannot end a sentence with because because because is a conjunction";
pattern = /because/gi;

console.log(becauseSentence.match(pattern).length);

//3- Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let salaryPerMonth = 5000;
let annualBonus = 10000;
let coursesPerMonth = 15000;
let totalIncomePerMonth = annualBonus / 12 + salaryPerMonth + coursesPerMonth;
let heEarns = `He earns ${salaryPerMonth} euro from salary per month, ${annualBonus} euro annual bonus ${coursesPerMonth} euro online courses per month. His total income per month is ${totalIncomePerMonth}`;
console.log(heEarns);
