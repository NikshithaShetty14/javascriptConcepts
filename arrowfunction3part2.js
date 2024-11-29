//Basics arrow function
const addNum = (num1, num2) => {
    return num1 + num2; //if you are using { }then you must  write return // this is explicit return
    }
console.log(addNum(3, 4)); //7


//Implicit Return
const addnumber = (num1, num2) => num1 + num2; 
//const addnumber = (num1, num2) => (num1 + num2); //then you do not have to write the return keyword
console.log( addnumber(5, 6)); //11

//How to return an object using arrow function
const ls = ( num1, num2) => ({username: "Nikshitha"})
console.log(ls);
