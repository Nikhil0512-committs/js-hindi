function sayMyName() { // declaring of function
    // Ab isme kuch bhi daaldo jo function se kaam karwana hai
}
sayMyName // Reference of function
sayMyName() // Execution of function


// function addTwoNumbers(number1, number2) { // isme joh bracket me hai inko parameter bola jaata hai
//     console.log(number1+number2)
// }


function addTwoNumbers(number1 , number2){
    let result = number1 + number2
    return result // return ke neeche kuch bhi likh lo voh execute nahi hoga
}
const result = addTwoNumbers(3,4) // Ans is 7 , idhar joh bracket me hai inko argument bola jaata hai
console.log("Result: ",result)


function loginUser(username) {
    return `${username} just logged in`
}
console.log(loginUser("Nikhil"))

function loginUser(username) {
    if(username === undefined){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUser())



// Functions with Rest Operator


function calculateCartPrice(...num1){ // This is rest operator aur isse hum jitne marzi elements daal sakte hai in function aur voh as an array return ho jayenge
    return num1
}
console.log(calculateCartPrice(200,300,400))


// Function With Object
 
const user = {
    username: "Nikhil",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)


const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)) //300
