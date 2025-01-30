// for of

//[{},{},{}]

const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num)
} // 1 se 5 tak values print hojayegi

const greetings = "Hello World"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
} // saare characters baari-baari karke print hojayenge


// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France") 
console.log(map) // map(3) karke aayega, automatically unique values hi aati hai sirf in order in which we have added

for(const [key, value] of map){
console.log(key, ':-' , value)
} // IN :- India
// aise karke aayega , this method can't be used in object
