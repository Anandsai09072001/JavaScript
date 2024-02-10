// singleton  agar object constructor se banne toh singleton rehata nahi toh nahi.

// object literals

const JsUser = {
    name:"Anand",
    age:22,
    location:"Bidar",
    email:"anand325@gmail.com",
    isLoggedIn : false,
    lastLogInDays: ["Monday", "Saturday"]
};

//first type to access the element from object JsUser
console.log(JsUser.email);
//second type to access the element from object JsUser
console.log(JsUser["email"]); // this used when we declare "full name" we use this method without this method we cannot access the element

//to access keys from object

console.log(Object.keys(JsUser));
console.log(Object.values(JsUser));
// hasOwnProperty : checks object has that property or not
console.log(Object.hasOwnProperty("islogedin"));

//

const course = {
    coursename : "Js in hindi",
    purchase : "999",
    courseInstructor: "hitesh "
};

//course.courseInstructor
//each time we will not write object.variable_name to access we use method given below
// destructureing
const {courseInstructor : instructor} = course;
console.log(courseInstructor);

//API:generally apna kaam kisi aur ke sar par dalna ho toh api use karte hai
// API: Application programming interface

/*  JSON kaise dhikta hai
    {
        name:"anand",
        email:"a@gmail.com"
        price:"free"
    }
    aaise haa object he JSON hai matlab object nahi hote lekin inko {} me likha jaata hai aur inko waise he treat kiya jata hai

*/
//json
/*{
    "name":"Anand",
    "coursename":"js in hindi",
    "price":"free"
}*/


