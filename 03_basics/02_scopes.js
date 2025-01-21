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
