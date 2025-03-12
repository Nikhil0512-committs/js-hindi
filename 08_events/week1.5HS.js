// sync - happens one after another , in sequence
// async - happens in parts , multiple things at a time
 
// Async function
setTimeout(,1000) //1 sec baad run hoga , itni der me iske neeche ke console chal padenge

const fs = require("fs") // filesystem
fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data) // isse jo a.txt file me written hoga voh aajayega
})

console.log("hi there ") 
// pehle hi there aayega phir uske baad async function which is fs usme se text aayega baaki ka

// async function comes in the last


// ***** Promises ****
// Promises make the code look better
// my own asynchronous function

const fs = require("fs")

function kiratReadsFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", function(err,data){
            resolve(data)
        })
    })

}
function onDone(data){
    console.log(data);
}
kiratReadsFile().then(onDone) 
// hi there from a.txt
