function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function sumOfSomething(a,b,callback){
    const val1 = callback(a);
    const val2 = callback(b);
    return val1+val2;
}

const ans = sumOfSomething(2,3,square);
console.log(ans)