const user = {
    username: "Nikhil",
    loginCount: 8,
    signedIn: true

    getUserDetails: function(){
        console.log(this); // tells about current context , object ki saari details aajayengi
    }
}
console.log(user.username); // nikhil
console.log(user.getUserDetails());

// console.log(this) , Global context me value empty brackets aate hai{} but this value keeps changing



function user(Username , isLoggedin , loginCount){
    this.Username = username
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin

    return this;
}

const UserOne = new user("Nikhil",12,true)
// Gives everything
