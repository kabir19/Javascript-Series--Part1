
function sayMyName() {
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("Y");
    console.log("A");
    console.log("P");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);

// }

function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2

}

const result = addTwoNumbers(10, 19)

// console.log("Result: ",result);

function loginUserMessage(username = "Sam"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Kashyap")); 

// console.log(loginUserMessage()); 

// use of ... as rest operator and spread operator
// function calculateCartPrice(...num1){
//     return num1
// }

// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 1000))

const user ={
    username: "kashyap",
    price:499
}

function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObjects(user)

handleObjects({
    username: "Kenny",
    price: 799
})

const myNewArray = [200, 400, 100, 900]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));