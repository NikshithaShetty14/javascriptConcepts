// //singleton 
// let tinderuser = new Object() //{} // It's a single ton
// console.log(tinderuser);

 let tinderuser = {} //{} //it's a object literals

tinderuser.id = "101";
tinderuser.name = "Nikshitha";
tinderuser.isloggedin = "false"
// console.log(tinderuser) //{ id: '101', name: 'Nikshitha', isloggedin: 'false' }
// console.log(Object.keys(tinderuser)); //[ 'id', 'name', 'isloggedin' ]
// console.log(Object.values(tinderuser)); //[ '101', 'Nikshitha', 'false' ]
// console.log(Object.entries(tinderuser));//[ [ 'id', '101' ], [ 'name', 'Nikshitha' ], [ 'isloggedin', 'false' ] ]
console.log(tinderuser.hasOwnProperty('isloggedin')); //true //to check whether you have this property or not
console.log(tinderuser.hasOwnProperty('islogged')); //false // islogged in does not exits so you get false



// const regularExpression = {
//     email : "nikshithashetty2gmail.com",
//     fullName : {
//         username : {
//             firstName : "Nikshitha",
//             lastName : "shetty"
//         }
//     }
// }

// console.log(regularExpression.fullName.username) //{ firstName: 'Nikshitha', lastName: 'shetty' }

// let obj1 = {
//     a : "1",
//     b : "2"
// }

// let obj2 = {
//     c : "3",
//     d : "4"
// }

// let obj3 = {...obj1, ...obj2}; // We use spread operator to combine the value (we can also use Object.assign({}, obj1,obj2)//we get the same output)
// console.log(obj3);


// let user =[
//     {
//         id: "1",
//         name : "N"
//     },
//     {
//         id : "2",
//         name : "M"
//     },
//     {

//     }
// ]

// console.log(user[0]); //{ id: '1', name: 'N' }