{} // It is known as scope

if(true) { // if ke andar hum jo bhi likh rahe hai voh hai block scope aur iske bahar sahar glovbal scope hai
    let a = 10
    const b = 20
    var c = 30
}
console.log(a)
console.log(b)
console.log(c)
// That's why var is not used as it comes out of block scope as well



function one() {
    const username = "Nikhil"

    function two(){
        const website = "nikhil.com"
        console.log(username)
    }
    // console.log(website) // Gives error

    two()
}
one()



// +++++++ Interesting ++++++++

// Different ways of declaring a function

console.log(addOne(5))
function addOne(num){
    return num + 1
}



console.log(addTwo(7)) // Gives error as addTwo cannot be used before initialization
const addTwo = function(num){
    return num + 2
}