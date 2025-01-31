const myNums = [1,2,3,4,5,6,7,8,9]
const newNum = myNums.filter( (num)=>num>4)
console.log(newNum) // 5,6,7,8,9
// scope use karoge toh return laga dena

// another way to do it again

myNums.forEach( (num)=>{
    if(num > 4){
        newNums.push(num)
    }
})




const books = [{},{},{}]
let userBooks = books.filter( (bk)=> bk.genre === 'History')
//console.log(userBooks) // iske through proper objects hi aajayenge jiska genre history ho
userbooks = books.filter( (bk)=>bk.published >= 2000)
console.log(userbooks) // ab sirf neeche wala filter lagega , agar curly braces lagate to use return keyword
agar userbooks = books.filter( (bk) => bk.publish >= 2000 && bk.genre ==="History") // ab dono filter use honge idhar

