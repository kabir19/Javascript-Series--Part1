// singleton using Constructers
// Object.create

// object literals i.e how to/ways to declare an object

const mySym = Symbol("key1")

const jsUser = {
    name: "Kashyap",
    "full name": "Kashyap Wadekar",
    [mySym]: "mykey1",
    age: 32,
    location: "Mumbai",
    email: "kashyap@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["monday", "Saturday"] 
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser, ["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "kashyap@outlook.com"
// console.log(jsUser["email"]);

// Object.freeze(jsUser)
jsUser.email = "kashyap@chatgpt.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user.");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
