//normal while loop use kora run kora.
var i = 1;
while(i <= 10) {
    console.log(i)
    i++
}

//normal while loop use kora factorial run kora." factorial = factorioal * i " ai vaba kaj kora 
var i = 1;
var fact = 1;
while(i <= 10) {
    fact = fact * i;
    console.log(i, fact);
    i++
}
// kno spaceck sonker factorioal janta hoila; r loop sobsomay akvaba cholata thaka;
var i = 1;
var fact = 1;
while(i <= 5) {
    fact = fact * i;
    i++
}
console.log(fact);

//function use kora

// function factorial(n); {
//     var i = 1;
//     var facts = 1;
//     while(i <= n) {
//         facts = facts * i;
//         i++;
//     }
//     return facts;
// }
// var result = facts(5);
// console.log(result);

//Recursive Fibonacci Example;
function fibonacci(number) {
    if(number <= 1){
        return 1;
    }else {
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}
var result =fibonacci(10);
console.log(result);

//Iterative Factorial Example
function factorial(n){
    var result = 1;
  
    for(var i = 1; i <= n; i++){
      result = result * i;
    }
    return result;
  }
var result =factorial(10);
console.log(result);