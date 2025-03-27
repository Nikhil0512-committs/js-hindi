function setUsername (username) {
   this.username = username;
}

function createUser(username , email , password){
    setUsername.call(this, username) //.call se saari dikkaten sahi ho jayengi
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai) // isse username nahi aayega baaki chize aajayengi