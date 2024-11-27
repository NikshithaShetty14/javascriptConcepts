//there is two ways of declaring a objet 1)literals  2)construction(singleton)

//how to access symbol using a key
const mysym = Symbol("key1");

//object literals
let person ={
    
    "full name": "nshetty", // you can not access this uing dot.
    [mysym]: "mykey1", //if you want to refer symbol
    first : "Nikshitha",
    last : "Shetty",
    email : "nikshithashetty@gmail.com",
}
console.log(person.first); //Nikshitha
console.log(person["first"]); //Nikshitha // the other way of accesing object.
console.log(person["full name"]) //nshetty //this is the reson we prefer [""] so that we can access
console.log(person[mysym])
console.log(person) //mykey1 {'full name': 'nshetty',first: 'Nikshitha',last: 'Shetty', email: 'nikshithashetty@gmail.com',[Symbol(key1)]: 'mykey1'}


person.email= "nikshithashetty@chatgpt.com";
// Object.freeze(person); // Once an object is frozen, you cannot add, remove, or change its properties. so this won't work nikshitha@microsoft.com since it is frozen.
person.email= "nikshitha@microsoft.com";
console.log(person) //  email: 'nikshithashetty@chatgpt.com', // you get the updated email.

person.greetings = function(){
    console.log("Hello users");
}
console.log(person.greetings()) //Hello users

person.greetings1 = function(){
    console.log(`Hello users ${this.first}`);
}
console.log(person.greetings1())




