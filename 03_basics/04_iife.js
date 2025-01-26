// Immediately Invoked Function Expression(IIFE)

(function chai (){ // This is named iife
    console.log(`DB CONNECTED`)
})();
// Global scope ke pollution se kayi baar problem hoti hai toh we use iife
// Arrow fxn
( () => {
    console.log(`DB CONNECTED TWO`)
})();
