//nested scope
//since js is a single thread language it executes line by line 

function one(){
    let username = "Nikshitha Shetty";
    function two(){
        let website = "GitHub";
        console.log(username);
    }
    //console.log(website); //here it gives an error since you are accesing outside the scope.
    two();  //Nikshitha Shetty //if the above line is commented out the two will execute
}

one();

//using if
if(true){
    const username = "Nikshitha";
    if(username === "Nikshitha"){
        let website = "Github";
        console.log(username +" "+ website); //Nikshitha Github
    }
   // console.log(website); //here you get an error. It is outside the scope.
}
//console.log(username); //here you get an error. It is outside the scope.

//+++++++++++++++ something intresting scope about the function.+++++++++++++//

//This is the basic and normal function

console.log(addOne(5)); //Here you can access even before initilizing it
function addOne(num1){
    return num1 + 1

}




//This is called as an expression. the variables which holds a function
console.log(addTwo(5));
const addTwo = function(num){
    return num + 2;
}


