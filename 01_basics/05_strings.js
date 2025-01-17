const name = "Nikhil"
const repoCount = 2

// OLD WAY 
//console.log(name + repoCount +"Values")

// New and more eefective way
console.log(`My name is ${name} and my repo count is ${repoCount}`) // Here backtics are used which are above TAB button 
// It is known as string interpolation 

const gameName = new String('Nikhil') // much better way to declare a string as it gives us a lot of information     and key value pair can be accessed very easily like 
console.log(gameName[0]) // it will give N
console.log(gameName.__proto__) // It will give object

console.log(gameName.length) // total batayega kitne characters hai usme (to be precise letters)


console.log(gameName.toUpperCase()) // Everything will get converted to uppercase

console.log(gameName.charAt(2)) // index 2 pe konsa character hai voh aayega
console.log(gameName.indexOf('t')) // yeh character konse index pe hai voh aayega

const newGameName = gameName.substring(0,4) // index 0-3 tak charcters aayenge sirf excluding the end character which is 4

const anotherString = gameName.slice(0,2) // isme bhi last index wala charcter nahi aata hai
console.log(anotherString)

const newString1 = "     Nikhil   "
console.log(newString1) //     Nikhil    
console.log(newString1.trim()) //Nikhil , faltu ka space trim hojata hai

const url = "hiteshchoudhary%20hitesh"
console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // here we will ask the system that ki kya url me sundar word hai ? and it prevents true or false

.split('-') // it will get split whenever - comes in form of an array and we can add a limit in in too for the index of words