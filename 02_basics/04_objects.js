//const tinderUser = new Object() // Another way of declaring an object , yeh ek singleton object hai

const tinderUser = {} // Same as of above but yeh ek non-singleton object hai

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Nikhil",
            lastname: "Sharma"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname) // we can do multiple nestings in objects

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4:"b"}

//const obj3 = Object.assign({}, obj1, obj2) // It's a good practice to add empty curly brackets in the starting aur isme objects merge ho jaate hai ... Isme empty curly brackets are the target and obj1 , obj2 are the source


// Spread method bhi hai for the same objects ko jodne ke liye

const obj3 = {...obj1, ...obj2}
console.log(obj3)


// Array of Objects 
const Users = [
    {
        id: 1,
        email:"h@gmail.com"
    },
    {
        id: 2,
        email: "n@gmail.com"
    },

]
Users[1].email // Users[1] ek object hai aur uske andar jaake hum koi key access kar sakte hai


console.log(Object.keys(tinderUser)) // Saari keys de dega like id email and what we have put in their in form of arrays
console.log(Object.values(tinderUser)) // Isse values aa jayengi

console.log(Object.entries(tinderUser)) // Har ek key value ko array me bana diya jaata hai
console.log(tinderUser.hasOwnProperty("isLoggedIn")) // Boolean ki form me iska ans aata hai , batata hai ki yeh property hai ki nahi


//////////////////////////

const course = {
    courseInstructor: "hitesh"
    courseName: "JSinHindi"
    coursePrice: 999 
}
const{courseInstructor} = course // ab ham sidha courseInstructor use kar sakte hai , course. course instructor ki koi zaroorat nahi hai , hum isko rename bhi kar sakte hai jaise neeche bataya hai
const {courseInstructor: instructor} = course // It is known as destructuring of object
console.log(instructor)

// JSON API

{
    "name": "Nikhil" // isme keys bhi strings hote hai 
}
[
{},
{},
{}
]