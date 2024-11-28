//Objects using Api
//Destructing object

let course = {
    coursename : "Javascript",
    courseprice : "999",
    courseinstructor : "Shetty"
} 

//JASON //tool(Jason formater)

// {
//     "name" : "nisha",
//     "id": 1
// }

//API
// [
//     {}
//     {}
// ]

//destructring it
const {courseinstructor : instructor} = course;
console.log(instructor); // Shetty

//this is about the react
const navbar = ({company}) => {

}
navbar(company = "nikshitha");




