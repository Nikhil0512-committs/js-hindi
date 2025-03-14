// Promises
// Just a more better way to write async functions
// How could you create your own async functions?

setTimeout(function(){
  console.log("Hi There")
  setTimeout(function(){
    console.log("Inside the second one")
  },2000)
},1000)
// This is an ugly example

// using promises

function  myOwnSetTimeout(duration){
    let p = new Promise(function (resolve){
        setTimeout(resolve,1000)
    })
    return p;
}
myOwnSetTimeout(1000){
    .then(function(){
        console.log("Log the first thing")
    })
}
// Promise is just another class in JavaScript


function promisifiedMyOwnSetTimeout(duration) {
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },duration)
    })
    return p;
}

const ans = promisifiedMyOwnSetTimeout(1000)
ans.then( function(){
    console.log("Timeout is done")
})


// async , await
async function myGoodfn(){
    let response = await fn()
    return response;
}