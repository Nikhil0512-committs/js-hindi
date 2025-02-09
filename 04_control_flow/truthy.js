const userEmail = ""

if(userEmail){
    console.log("Got user email")
} else{
    console.log("Don't have user email")
} // Got user email aayega

// Empty string hai to false

// falsy values
// false,0,-0, BigInt 0n, "" , null , undefined, NaN


// truthy values
true , "0" , "false" , " " , [], {}, function(){}

if(userEmail.LENGTH===0){
    console.log("Array is empty")
}
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty")
}


false == 0 // true
false == "" // true
0 == '' // true

// Nullish Coalesing Operator (??) : null undefined

let val1
val1 = 5 ?? 10 // 5
val1 = null ?? 10 // 10
val1 = null ?? 10 ?? 15 // 10

// Terniary Operator

condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80"
)

