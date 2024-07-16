//Create a human readable time format using the Date time object.

let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let humanReadable = `${day}.0${month + 1}.${year}`;

console.log(humanReadable);
