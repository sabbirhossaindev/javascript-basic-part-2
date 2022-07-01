//n! = (n-1)!*n
//6! = (6-1)!*6
//6! = 5*6
//6! = 1*2*3*4*5*6
//6! = 5!*6

//functon er vitora ai vaba call kora ka function a Reccursive bola;
function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
var result = factorial(10);
console.log(result); 