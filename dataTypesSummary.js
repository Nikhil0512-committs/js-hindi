// Primitive (They are call by value in nature , means gets the copy of variable)

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt
// JavaScript is dynamically typed

// *** To Define a Symbol

// const id = Symbol('123')
// const anotherId = Symbol('123')   These both are different



// Big Int
// const bigNumber = 3453364546736354n
//last me n lagana hai sirf

// Reference Type (Non Primitive)

// Array, Objects, Functions

// Arrays 
const heros = ["Shaktiman", "DOga"]
// Object
let myObj = {
    name: "Nikhil",
    age: 18,
}
// Function

const myFunction = function(){
    console.log("Hello World");
    
}



*****************

// Stack(Primitive)- gives copy , Heap(Non-Primitive)- gives reference of original value
// Stack (ek ke upar ek)  heap(just a normal square or rectangle)


let userOne = {
    email: "nikhildotcom",
    upi: "abc@ibl"
}
let userTwo = userOne
userTwo.email = "nikhilGoogledotcom"

console.log(userOne.email)
console.log(userTwo.email) 
// both will give the 2nd email as its an example of heap memory (refernce)