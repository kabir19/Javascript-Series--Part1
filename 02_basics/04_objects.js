// const tinderUser = new Object()    //example of singleton object.

const tinderUser = {}                 // example of non-singleton object.

tinderUser.id = "123abc"
tinderUser.name = "Kenny"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "someuser@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Kashyap",
            lastName: "Wadekar"
        }
    }
}

// console.log(regularUser.email);
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign(obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);