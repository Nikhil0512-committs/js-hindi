const myNums = [1,2,3]

const myTotal = myNums.reduce( (acc,curr)=> (acc+curr),0) // acc is accumulator jiski value hamne zero di hui hai aur curr is current value
console.log(myTotal) //6


const shoppingcart = [{},{}]
shoppingcart.reduce( (acc,Item)=> acc+Item.price,0)
