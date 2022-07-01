// simple way ta prime sonka nirnoy.

// var n = 18;

// for (i = 2; i < n - 1; i++) {
//     console.log(i, n - i,);
// }

// mudulas dila vagses daka jaba.

// var n = 109;

// for (i = 2; i < n; i++) {
//     // console.log(i, n % i,);
//     if ( n % i ==  0){
//         console.log('Not a Prime Number.');
//         break;
//     }
// }
// console.log('Your number is a prime number.')

// function use kora epsin vaba Not a Prime Number sow korba.
function isPrime(n){
    for (i = 2; i < n; i++) {
        if ( n % i ==  0){
        return 'Not a Prime Number.';
        }
    }
    return 'Your number is a prime number.';
}
var result = isPrime(128);
console.log(result);

// function use kora epsin vaba Your number is a prime number sow korba.
function isPrime(n){
    for (i = 2; i < n; i++) {
        if ( n % i ==  0){
        return 'Not a Prime Number.';
        }
    }
    return 'Your number is a prime number.';
}
var result = isPrime(139);
console.log(result);
