//functions

function addtwoNumbers (number1, number2){ //this is the parameter of the function
    console.log(number1 + number2);
}
 addtwoNumbers(2, 4); //6 //this is the argument of the function
 addtwoNumbers(3, null); // 3 //so  checking is important here


 //the other way of writing this function is
 function addtwoNumbers1 (num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2; //after return you write anything it won't execute
 }
  //whenwere you use a return you need to store it in a variable
  console.log(addtwoNumbers1 (2, 6));
 let result =  addtwoNumbers1 (2 ,6);
 console.log("reasult :",result) //reasult : 8

  function loginUserMessage(username){
     return `${username} just logged in`;
  }
   console.log(loginUserMessage("nikshitha")); //nikshitha just logged in

function usermessage(username){
    //the if condition will be return only if the username is undefined
    if(username === undefined){ //(!username) it also work // this is the other way
        console.log("Plese enter the username"); //it will execute if the condition is true
            return //untill unless you won't enter the username the next line code does not exit   
    }
    
    return `${username} just logged` 
}

console.log(usermessage()) //Plese enter the username


