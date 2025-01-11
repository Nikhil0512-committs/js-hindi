let score = "33"

console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));  // It converted string into a number and it does same with other data Types as well
// try to check the value as well because sometimes there's some ambiguity which shows NaN

// "33"=>33
// "33abc"=> Nan
// true =>1 , false=>0

// In boolean conversion
// 1=> true , 0=>false
// ""=>false, "hitesh"=>true