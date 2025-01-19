// constructor se hamesha singleton object banega

// Object literals
// Symbol
const mySum = Symbol("Key1")
const JSuser = {
    name: "Nikhil",
    [mySum]: "myKey1",
    age: 18,
    location: "Jammu",
    email: "nikhil@google.com",
    isLoggedIn: false
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JSuser.email)
console.log(JSuser["email"]) // use this method
console.log(JSuser[mySym])


JSuser.email = "nikhil@chatgpt.com"
//Object.freeze(JSuser)  // isse ab koi bhi value change nahi ho sakti hai object ki

JSuser.greeting = function(){
    console.log("Hello World")
}
console.log(JSuser.greeting()) // gives Hello World

JSuser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`)
} // this. se object wali chize aajati hai
