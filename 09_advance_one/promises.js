// A promise is an object
const promiseOne = new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log('Async task is completed')
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise is consumed");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username:"Nikhil",email:})
    },1000)
})