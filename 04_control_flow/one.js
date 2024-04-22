// if

// if(true){
//     console.log("this will execute");
// }

// if(false){
//     console.log("this will not execute");
// }

const isUserLoggedIn = true
const temperature = 60

// if(2 == "2"){
//     console.log("executed");
// }

// if(temperature === 41){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50");
// }

// console.log("Executed");

// Comparision Operators
// <, >, <=, >=, ==, !=, ===

const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`user Power: ${power}`);
// }

// console.log(`user Power: ${power}`);

// Short-hand notation

// const balance = 1000
// if (balance > 500) console.log("TEST");  // Its also called implicit scope

// Nesting of if conditions

// if (balance < 500){
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true 

if (userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log(`User logged in`);
}