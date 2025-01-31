const myObject = {
    js: "JavaScript"
    cpp: "c++"
    rb: "ruby"
    swift: "Swift by Apple"
}

// For in loop

for(const key in myObject){
    console.log(key) // js , cpp , ruby , swift
}

for(const key in myObject){
    console.log(`${key} is shortcut for ${myObject[key]}`)
} // js shortcut is for javascript ...


const programming = ["js","cpp","python","html","css"]
for(const key in programming){
    console.log(programming[key]) // sab print hojayega
}
