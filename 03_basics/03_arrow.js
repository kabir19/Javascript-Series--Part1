const user = {
    username: "kashyap",
    price: 999,

    welcomeMessage: function(){
        // this refers to the current context i.e the user object in this case
        console.log(`${this.username} , welcome to website.`);
        console.log(this);
    }

}

// user.welcomeMessage()

// user.username = "Rinal"
// user.welcomeMessage()

// console.log(this);

// function coffee(){
//     let username = "Kashyap"
//     console.log(this.username); //Output is undefined since this context works only in objects and not in functions
// }

// coffee()

// const chai = function() {
//     let username = "Kashyap"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Kashyap"
    console.log(this.username);
}

// chai()

// Basic Arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicity arrow function 

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Kenny"})

console.log(addTwo(1, 9));