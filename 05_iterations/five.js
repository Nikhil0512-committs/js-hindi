const coding = ["js","ruby","java","python","cpp"]
coding.forEach(function (val){
    console.log(val) // sab print hojayega
})
// another method
coding.forEach((item)=>{
    console.log(item)
})

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr)
})

const myCoding = [
    {
     languageName:"javaScript"
     languageFileName:"JS"
    },
    {
        languageName:"C++"
        languageFileName:"cpp"
    }

] // array ke andar objects hai

myCoding.forEach((item)=>{
    console.log(item.languageName) // JavaScript C++
})