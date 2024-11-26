//Array
//1)push(0)  2) pop()  3)unshift(0)  4)shift()  5)includes(5)  6)indexOf() 7) join 8)slice() 9)splice()  10)concat() 11)spread() 12)flat(Infinity)

// let arr =[2,5,6,7,8,4];
// console.log(arr);

// //1)push()
// //* Adds an element at the end of the array
// arr.push(9); //[2,5,6,7,8,4 ,9];
// console.log(arr);

// //2)pop()
// //*Delete an element at the end of the array
// arr.pop() //[ 2, 5, 6, 7, 8, 4 ]
// console.log(arr);

// //3)unshift()
// //*Add the element at the begining
// arr.unshift(9);//[ 9, 2, 5, 6, 7, 8, 4 ]
// console.log(arr);

// //4)shift()
// //Delete an element at the beginig of the array
// arr.shift();//[ 2, 5, 6, 7, 8, 4 ]
// console.log(arr)

//5)includes()
//it gives the output with true and false
// console.log(arr.includes(5));//true
// console.log(arr.includes(0)) //false

//6)indexOf()
// console.log(arr.indexOf(6)); //you get the index of number 6 //2 (the nuber 6 is in the 2nd index)
// console.log(arr.indexOf(0));// -1 (you don't have0 number in ann array so you get  -1)(0 the value doesnot exists )

//7) join

// let newarr = arr.join();
// console.log(arr);//[ 2, 5, 6, 7, 8, 4 ]
// console.log(newarr); //2,5,6,7,8,4 (the difference is the type will be converted in string)
// console.log(typeof newarr); //string
// console.log(typeof arr); //object
// console.log(arr.join('-')); //2-5-6-7-8-4
// console.log(arr.join(',')); //2,5,6,7,8,4

//slice
//*2 parameter (start and end)

// console.log(arr.slice(1,4))// [ 5, 6, 7 ]
// console.log('A',arr);


//splice
//* you can add the index(2,0, 'a','b')

// console.log(arr.splice(1,4)) //[ 5, 6, 7, 8 ]
// console.log('B',arr);


// //10) concat() :- it adds and return a new array.
//  let marval_heros = ['A', 'B', 'C', 'D'];
//  let dc_heros = ['E','F','G','H'];
//  

//  let all_heros = marval_heros.concat(dc_heros);
//  console.log(all_heros); //['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] //it returns a new array

//the other way is you can use spread operator(glass)

//11) spread()
// let heros = [...marval_heros, ...dc_heros];//['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] //you get the same output
// console.log(heros);


//12) flat()
//* It reduce the nesting of an array and  return a new arry 
// let another_arr = [1,2,3,[3,4,5],2,6,[7,8,3,[2,4,[5,6,7]]],0];
// console.log(another_arr.flat(Infinity)); //[ 1, 2, 3, 3, 4, 5, 2, 6, 7, 8, 3, 2, 4, 5, 6, 7, 0]

// console.log(Array.isArray("Nikshitha")); //false //checking wthether it is array or not .If it is array the output will be true else false.
// console.log(Array.from("Nikshitha"));//[ 'N', 'i', 'k','s', 'h', 'i','t', 'h', 'a']
// console.log(Array.from({name: "nikshitha"})) //[]

let score1 = 100;
let score2 = 200;
 let score3 = 300;

 console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
 console.log(Array.from(`${score1} ${score2} ${score3}`));













