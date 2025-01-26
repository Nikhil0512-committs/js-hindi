// this is used for current context

const user = {
    username: "NIkhil",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the website`)
        console.log(this) // isme current context ki saari details de dega like username , price , welcomeMessage ka refernce
    }
}
user.welcomeMessage() // it will print Nikhil, Welcome to the website
user.username = "Sam"
user.welcomeMessage() // Ab isme naam Sam aayega kyunki ab username sam hogaya hai , context is changed here
console.log(this) // Gives an empty object


function chai(){
    console.log(this)
}
chai() // Kaafi values milti hai


// Arrow Function
const chai = () => {
    let username = "Nikhil"
    console.log(this)
}
chai() // empty

const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,4)) // 7

// Implicit return Arrow Function
const chai = (num1,num2) => num1+num2
console.log(chai(3,4)) // 7
// Another method
const addTwo = (num1,num2) => (num1+num2)
console.log(addTwo(3,4)) // 7 , An object can be returned in this manner only

// curly brackets wale me return keyword likhna hi padega
