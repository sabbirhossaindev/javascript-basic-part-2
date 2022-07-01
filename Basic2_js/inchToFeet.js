// just 1 ta inch to feet convart korer jonno ba aita normal ;
var inch = 156;
var feet = inch / 12;
console.log(feet);

// function use kora inch to feet convart ka bar baer use kora jay tai aita resunabal;
function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var nanaFeet = inchToFeet(156);
console.log(nanaFeet);
var naniFeet = inchToFeet(288);
console.log(naniFeet);
var dadiFeet = inchToFeet(300);
console.log(dadiFeet);
var sabbirFeet = inchToFeet(312);
console.log(sabbirFeet);

// loop use kora same kaj inch to feet convart ka bar baer use kora jay tai aita resunabal;
function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var senior = [12, 24, 36, 312];
var nanaFeet = inchToFeet(senior[0]);
console.log(nanaFeet);
var naniFeet = inchToFeet(senior[1]);
console.log(naniFeet);
var dadiFeet = inchToFeet(senior[2]);
console.log(dadiFeet);
var sabbirFeet = inchToFeet(senior[3]);
console.log(sabbirFeet); 