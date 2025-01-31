const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNumbers.map( (num)=> num+10)
//console.log(newNums) // saare numbers me 10 add hua hoga aur vohi return hoga

// chaining

const newnums = myNumbers.map( (num) => num * 10).map( (num)=> num+1 ) 
console.log(newnums) // dono map run honge turn by turn aur iske answers aayenge 11,21,31,...
//we can use multiple maps and filter at the same 
