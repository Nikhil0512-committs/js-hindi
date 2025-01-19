const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
marvel_heros.push(dc_heros)
//console.log(marvel_heros)// array ke andar array aagaya hai
//console.log(marvel_heros[3][1]) // flash
const all_heros = marvel_heros.concat(dc_heros) // creates a new array by merging both the arrays
//console.log(all_heros)
// Another easy method to do so

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros) // Its a better method

const another_array = [1,2,3,[4,5,6],7,[6,7, [4, 5]]]
const real_array = another_array.flat(Infinity) // saare sub arrays ko bhi ek hi array me convert karke de deta hai 
console.log(real_array)


console.log(Array.from("Hitesh")) // saare alphabets ka ek array bana dega
console.log(Array.isArray("Hitesh")) // True or False Batayega ki yeh array hai ki nahi
 console.log(Array.from({name: "Nikhil"})) // Interesting gives empty array

 let score1 = 100
 let score2 = 200
 let score3 = 300
 console.log(Array.of(score1, score2, score3)) // ek new array ban jaati hai containing score 1 , 2 &3
 