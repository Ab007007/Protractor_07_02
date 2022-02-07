const fn = "Aravinda"
const ln =  " HB  "
const birthYear = 1980
const currentYear = 2022

console.log("Hi my name is " + fn + " " + ln + " and i'm " + (currentYear- birthYear) + " Years old ") ;
console.log(`i'm ${fn} ${ln} and i'm ${currentYear - birthYear } old`);

console.log(`Char at index 2 is ${fn.charAt(2)}`);
console.log(`Index of a Char is ${fn.indexOf('a')}`);
console.log(`Last index of a Char ${fn.lastIndexOf('a')}`);
console.log(`Length of the string ${fn.length}`);

console.log(`Length of the string ${ln.trim().length}`);
console.log(`Name is uppercase ${fn.toUpperCase()}`);
console.log(`Lower Case ${fn.toLowerCase()}`);

let userdetails = "Name=Aravinda;age=22;sso=2454578787"

details = userdetails.split(";")
console.log(details);











