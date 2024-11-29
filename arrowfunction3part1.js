//Arrow Function


let user ={
    username : "Nikshitha",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to this website`); //this refers to the current context
        // console.log(this);//{username: 'Nikshitha',price: 999,welcomeMessage: [Function: welcomeMessage]} or {username: 'sam',price: 999,welcomeMessage: [Function: welcomeMessage]}
    }
    
}
//  
// user.welcomeMessage(); //Nikshitha, welcome to this website
// user.username = "sam";
// user.welcomeMessage(); //sam, welcome to this website

 //{} //when yo execute interminal using node it will give empty output whic is{} ,but when you execute in the browser you get window object
//  console.log(this);

 //In Node.js(Terminal)
 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //Node.js runs your code inside a file (called a "module").
 //At the top level, this refers to the module itself.
 //Since the module doesn’t have anything specific attached to this, it shows an empty object ({}).
 //Node.js is made for server-side coding, so it doesn’t make this global.
 //In Node.js, this = the file you’re working in.


 //In a Browser
 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //The browser has a global object called window that represents the whole webpage.
 //At the top level, this refers to the window object.(it shows all it's properties and methods)
 //Browsers work with web pages, and the window is global, so this points to it.
 //In Browsers, this = the whole webpage.
 //in a browser console.log(this); // Output: Window {...}

  function one(){
     console.log(this); //you get some long output
  }
  one();

 function two(){
    let username = "Shetty";
    console.log(this.username) //undefined //you can't use this
 }
 two();

 //This is the function expression

 const three = function(){
    let username = "Shetty";
    console.log(this.username); //you get undefined
 }
 three();

 //This is the arrow function 

 const four = () =>{
    let username = "Shetty";
    console.log(this.username); // you get undefined
 }
 four();


 

 