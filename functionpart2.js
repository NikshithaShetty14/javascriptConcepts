//funtion using rest operator

function addcart(...num1){
    return num1;
}

console.log(addcart(200, 330, 800)) //[ 200, 330, 800 ]

//the othe example
function cart(val1, val2, ... num1){
    return num1; 
    
}

console.log(cart(200, 500, 800, 450, 650)) //[ 800, 450, 650 ] // because the val1 here is 200 and val2 here is 500 and rest of them are num1 value

//how to pass the object using function
let user ={
    name : "Nikshitha",
    id : "101"
}

function handleObject(anyobject){ //here you can give any name(suppose if you have multiple object)
    console.log(`Username is ${anyobject.name} an user id is ${anyobject.id}`); //Username is Nikshitha an user id is 101
}
 console.log(handleObject(user)) // here it is compouly to pass the object name for which object you are refering to.

 //this is the othe way
handleObject({ //Username is sam an user id is 399
    name :"sam",
    id :399
})

//Array using object
const myNewArray = [100, 200, 300];

function returnArray(getarray){
    return getarray[2]; //200
}
// console.log(returnArray(myNewArray));

//this the other way
console.log(returnArray([100, 200, 300]))