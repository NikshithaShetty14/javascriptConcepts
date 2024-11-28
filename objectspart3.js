//Objects using Api
//Destructing object

let course = {
    coursename : "Javascript",
    courseprice : "999",
    courseinstructor : "Shetty"
}

//destructring it
const {courseinstructor : instructor} = course;
console.log(instructor); // Shetty

//this is about the react
const navbar = ({company}) => {

}
navbar(company = "nikshitha");


