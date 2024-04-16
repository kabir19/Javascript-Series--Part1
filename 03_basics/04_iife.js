// Immediately Invoked Function Expression (IIFE)


// function chai(){
//     console.log(`DB CONNECTED`);
// }

(function chai(){
    // Name IIFE
    console.log(`DB CONNECTED`);
})();

// ( () => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } ) ()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) (`Kashyap`)