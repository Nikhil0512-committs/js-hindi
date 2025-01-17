const score = 400

const balance = new Number(100)
console.log(balance) // it will give [Number: 100]

console.log(balance.toString()) // isse yeh string me convert hojayega aur isme strings ki saari properties bhi apply ho jayengi easily

console.log(balance.toFixed(2)) // decimal ke aage jitni values dikhani hai utna number daal do 

const otherNumber = 123.8967
console.log(otherNumber.toPrecision(3)) // braCKETS me daalo ki kitni values ka end result chahiye , here 3 means ki 3 mein roundoff hojayega

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) // random zeroes and full number will get converted to indian standard(as in brackets we converted it to indian)
 

// +++++++ Maths +++++++++++++++


console.log(Math) // It contains a lot of values in it as it is an object ( we can see it in browser)

console.log(Math.abs(-4)) // abs means absolute , it converts any negative value to positive and thats all what it do 

console.log(Math.round(4.3)) // round off kar deta hai
console.log(Math.ceil(4.2)) //upper side round off karta hai
console.log(Math.floor(4.2)) //lower value leta hai

console.log(Math.min(4,3,2,1)) // lowest value deta hai
console.log(Math.max(4,3,2,1)) // highest value deta hai
console.log(Math.random()) // Gives random value in between 0 to 1

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1 )) + min ) // Now values will come in between 10 to 20