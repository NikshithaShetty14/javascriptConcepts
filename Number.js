// //Numbers
// //1)toString() 2)toFixed(1) 3)toLocalString()

// //tostring()
// //It converts arry boolean number into an string.you need to check the type
 let score = 400;
// let finalScore = score.toString(); //it won't update the value that is the reason we store in a variable
// console.log(typeof finalScore); //string

// //other way
// let balance = new Number(200); //here it specifies that it is a number //[Number: 200]
// console.log(balance);
// console.log(balance.toString()); //200(if you check the typeof the number has been converted to a string)(then you can use the string properties)

// //toFixed(1) 
// //In toFixed you need to give the properties of number
// let score1 = 40.23564;
// console.log(score1.toFixed(2));//40.24
// console.log(score.toFixed(2)); //400.00

// console.log(score1.toPrecision(2)); //40
// console.log(score.toPrecision(3)); //400

//toLocalString()
let  hundreds = 1000000;
console.log(hundreds.toLocaleString('en-US')); //1,000,000  you get an output with ,(+us$ like 100$)
console.log(hundreds.toLocaleString('en-IN')); //10,00,000 //by default we get indian standard




