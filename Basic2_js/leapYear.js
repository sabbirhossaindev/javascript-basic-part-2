//If/ else diya leap year ki na tha janta 
const years = 2024;
let remainder =  years % 4;
if (remainder == 0){
    console.log("Your year is leap year");
}
else{
    console.log("Your year is not a leap year");
}

// function use kora leap years bahir kora.
function isLeapYear(yeares) {
    const remainder = yeares % 4;
    if (remainder == 0){
        return true;
    } else {
        return false;
    }
}
const check = isLeapYear(2024);
console.log(check);

// kono sonker vagses janta hola modulas(%) use kora laga.
const bosor = 2000;
console.log(bosor % 4);

// kno sonka vag korta hola.
const bosors = 2000;
console.log(2000 / 4);

var factorial = 1;
for(var sum = 1; sum<=100; sum++) {
    factorial = factorial * 1;
    console.log =(sum, factorial);
}