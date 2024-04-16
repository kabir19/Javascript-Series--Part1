// var c = 300 recommended not to use
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log(`INNER: ${a}`);    // Variable a with Local scope
}

// console.log(a); // variable a with Global scope
// console.log(b); // throws and exception/error since we are trying to access local variable outside its scope globally.

// ****************Nested Scopes********************

// Remember the Adult and Children taking Ice Cream example
// Childrens can take Adults Ice cream but Adults can't take childrens Icecream.

function one(){
    const username = "kashyap"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    two()
}

// one()

if(true){
    const username = "Kashyap"
    if(username === "Kashyap"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ********************* interesting ****************

addone(5)   // This is allowed and will print 6

function addone(num){
    return num + 1
}


addTwo(5)  // This is not allowed in JS and will give an error.

const addTwo = function(num){
    return num + 2
}

