const myArr = [0,1,2,3,4,5] // All these are elements in array
// elements can be different as well like numbers and string

const myHeroes = ["Shaktiman", "nagraj"]
const myArr2 = new Array(1,2,3,4) // new type of declaring an array
console.log(myArr[1])
// Array Methods

myArr.push(6) // Array me 6 add hojata hai at the end(last)
myArr.pop() // It will remove the last element
myArr.unshift(9) // Array ke start me element add hota hai
myArr.shift() // first element remove ho jaata hai
console.log(myArr.includes(9)) // true or false ans aayega
console.log(myArr.indexOf(1)) // index deta hai as output

const newArr = myArr.join() // changes the type of array to string

// slice, splice
console.log("A", myArr)

const myn1 = myArr.slice(1,3) // 1 aur 2 index ka element aaayega except 3rd

const myn2 = myArr.splice(1,3) // isme 1 se 3 tak saare output me aayenge
// splice original array ko manipulate karta hai which means voh particular elements uss array se nikal leta hai whereas slice doesn't do so.