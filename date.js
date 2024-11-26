// //Date :- it is an object
//1) Month start from 0 when it is in a arry format or a single digit(203-01-14 not in this case)

let myDate = new Date(); 
console.log(myDate.toString());//Mon Nov 25 2024 11:28:14 GMT+0530 
console.log(myDate.toDateString()); //Mon Nov 25 2024
console.log(myDate.toISOString());//2024-11-25T06:03:45.249Z
console.log(myDate.toJSON()); //2024-11-25T06:03:45.249Z
console.log(myDate.toLocaleDateString()); //25/11/2024
console.log(myDate.toLocaleTimeString()); //11:33:45 am
console.log(myDate.toLocaleString()); //25/11/2024, 11:33:45 am 

let myCreatedDate = new Date(2023, 9, 14); 
console.log(myCreatedDate.toDateString());//Sat Oct 14 2023

let myCreatedDate1 = new Date(2023, 9, 14, 5, 3, 2); 
console.log(myCreatedDate1.toLocaleString());//14/10/2023, 5:03:02 am

 let myCreatedDate2 = new Date("01-14-2023"); // mm-dd-yy (you can also write  yy-mm-dd)
// console.log(myCreatedDate2.toLocaleString());//14/1/2023, 12:00:00 am

//You get the output in miliseconds

let myTimeStamp =Date.now()// quizes poll(at that time we use) 

 console.log(myTimeStamp) //(we get the output in miliseconds) //1732519087887
 console.log(myCreatedDate2.getTime()); //1673634600000


//if you want to convert milisecond into second then divide with 1000

console.log(Date.now() /1000); //1732520185.857
//if you want to remove the decimal value 
console.log(Math.floor(Date.now() /1000)); //1732520273

let newDate = new Date();
console.log(newDate.getMonth()); //10 it start from 0
console.log(newDate.getDay()); //1
console.log(newDate.getDay())
console.log(newDate.getMonth() + 1); //11





