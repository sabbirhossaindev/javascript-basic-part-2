// aita akta dara 1,1,2,3,5( jakono akta sonka r tar ager 2 ta sonka);
// fibo[2] = fibo[2-1] + fibo[2-2];
// fibo[3] = fibo[3-1] + fibo[3-2];
// fibo[4] = fibo[4-1] + fibo[4-2];
// fibo[5] = fibo[5-1] + fibo[5-2];
// fibo[i] = fibo[i-1] + fibo[i-2];

//list use kora fibonacci dicklar kora;
var fibo = [0, 1];
for (let  i = 2;  i <= 12;  i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
    // condole.log(fibo[i] = fibo[i-1] + fibo[i-2]);
}
console.log(fibo);

// function use kora fibonacci dicklar kora;
function fibonacci(n){
    var fibo = [0, 1];
    for (let  i = 2;  i <= n;  i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
var result = fibonacci(12);
console.log(result);