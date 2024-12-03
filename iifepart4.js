//Immeiately Invoked Function Expressions(IIFE)

(function data(){
    console.log("Database Connected")
})();//Database Connected //semicolon is must //supposce if you dont use the semicolon you will get the error when you right the next function

//() ->This is for function defination
//() -> the next parenthisis for function call
// This is how we use iife

//using arrow function
( () => {
    console.log("Database conneted two");
})
();

// pasing the parameter in iife
// ((name) => {
//     console.log(`database connected ${name}`);
// })()

function a(){
    let age = 1;
    return function x(){
        console.log(age);

}}

console.log(a());





























