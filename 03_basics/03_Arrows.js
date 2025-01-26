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