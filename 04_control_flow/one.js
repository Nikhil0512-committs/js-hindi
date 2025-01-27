// if statement

if(true){ // agar true hai to iske andar ka code chalega

}
=(single equal to ) , it is for assignment operator
== // just only for value comparison
=== // for both value and dataType comparison(strict equal)

const temperature = 42
if(temperature < 50){
    console.log("Temperature is less than 50 degrees")
}

const balance = 1000
if(balance<500){
    console.log("Balance is less than 500")
} else if(balance < 750){
    console.log("Balance is less than 750")
} else{
    console.log("Balance is less than 1200")
}

const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard){
    console.log("allow to buy courses")
}

const loggedInFromGoogle = true
const loggedInFromEmail = false
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("You can access it")
} // Here we have used Or , IF ANyone is even correct , it will go into the loop
