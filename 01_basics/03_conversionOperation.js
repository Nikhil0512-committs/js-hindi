let score = "33"

//console.log(typeof(score));

let valueInNumber = Number(score);
//console.log(typeof(valueInNumber));  // It converted string into a number and it does same with other data Types as well
// try to check the value as well because sometimes there's some ambiguity which shows NaN

// "33"=>33
// "33abc"=> Nan
// true =>1 , false=>0

// In boolean conversion
// 1=> true , 0=>false
// ""=>false, "hitesh"=>true



// ***************** Operations *************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2**2); //2 power 2
console.log(2+1)
console.log(2-1)
console.log(2*2)
console.log(2/2)
console.log(2%2)

let str1 = "Hello"
let str2 =" Nikhil"
let str3 = str1 + str2;
console.log(str3); // will give Hello Nikhil


console.log(+true) //1
console.log(true+) //error
console.log(true) //true