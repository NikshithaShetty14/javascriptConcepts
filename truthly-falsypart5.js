//Falsy values
false, 0, -0, BigInt 0n, "", null, undefined, NaN ;

//Truthy Values
"0", 'false', " ", [], {}, function(){},1,true,

//To check if the array is empty

let userEmail = []

if(userEmail){
    console.log("Got user email"); 
} else {
    console.log("Dont't have user email")
}

//to check whether array is empty 
if(userEmail.length === 0){
    console.log("Email is empty") //Email is empty
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){//it wireturn an array
    console.log("object is empty")
}

