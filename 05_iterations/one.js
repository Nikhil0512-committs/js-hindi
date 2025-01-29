// for

for(let index =0; index < 10; index++){
    const element = index;
    if(element == 5) {
        console.log("5 is best number")
    }
    console.log(element)
} // 0 se 9 tak numbers print ho jayenge

for (let i =0; i<=10;i++){
    console.log(`Outer loop value : ${i}`)
    for(let j=0;j<=10;j++){
        console.log(`Inner loop is ${j} and outer loop is ${i}`)
    }
}


const myArray = ["Batman", "Superman", "Flash"]
for(let i=0;i<myArray.length;i++){
    const element = myArray[i]
    console.log(element)
}



// break and continue

for(let index = 1 ; index<=20;index++){
    if(index ==5 ) {
        console.log(`Detected 5`);
        break;
    }
   console.log(`Value of i is ${index}`)
} // 1 se 4 tak hi jayega sirf

// continue me gar 4 pe lagaya hai to sirf 4 skip hojayega
