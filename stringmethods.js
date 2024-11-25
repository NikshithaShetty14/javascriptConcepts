// //String Methods
// // 1) charAt() 2) indexOf() 3) includes() 4)toUpperCase() 4) toLowerCase() 5) slice() 6) substring() 7)Split() 8) trim() 9)Replace 10)ReplaceAll 11)length
const para = "The morning is upon us.";

//length start from 1 index start from 0
console.log(para.length)  //23 (including space as well)

//Two ways
let str = para.charAt(6) 
console.log(str);//r
console.log(para.charAt(2)); //e

//indexOf
console.log(para.indexOf('n')); //7

//toUpperCae() & toLowerCase()
console.log(para.toUpperCase()); // THE MORNING IS UPON US.
console.log(para.toLowerCase()); // the morning is upon us.

// slice()
//1) It can take -ve numbers 
//2)Swapinng is not allowed.
//3)The original string won't change instead it returns the new string
//  [T]  [h]  [e]  [ ]  [m]  [o]  [r]  [n]  [i]  [n]   [g] [ ]  [i]  [s]  [ ]  [u]  [p]  [o]  [n]  [ ]  [u]  [s]  [.]
//  [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]  [9]  [10] [11] [12] [13] [14] [15] [16] [17] [18] [19] [20] [21] [22]
// [-23][-22][-21][-20][-19][-18][-17][-16][-15][-14][-13][-12][-11][-10] [-9] [-8] [-7] [-6] [-5] [-4] [-3] [-2] [-1]


console.log(para.slice()) //The morning is upon us.
console.log(para.slice(4, 8)) //morn
console.log(para.slice(-5)) // n us.
 console.log(para.slice(-4, -8)); //it wont give anything 
console.log(para.slice(-8,-5)); //upo
console.log(para.slice(8,-5)); //ing is upo
console.log(para.slice(-8, 5));//it wont give anything 
console.log(para.slice(2)); //e morning is upon us.
console.log(para.slice(8, 4)) //it won't give anything
console.log(para.slice(8, -23))//it won't give anything


//substring
//1) It does not take -ve numbers 
//2)Swapinng is  allowed.()
 console.log(para.substring()) //The morning is upon us.
 console.log(para.substring(4, 8)) //morn
 console.log(para.substring(-4, -8)); //it wont give anything 
 console.log(para.substring(-5)) // it does not take negative vallue (The morning is upon us.)
 console.log(para.substring(-4, -8)); //no value
 console.log(para.substring(2)); //e morning is upon us.
console.log(para.substring(8, 4)) //morn (it swap(4,8))
console.log(para.substring(8, 4)); //morn
console.log(para.substring(8, -24)); //(it takes 0 to 8)

//split
// 1) It is used to divide a string into array
console.log(para.split()); //[ 'The morning is upon us.' ]
console.log(para.split(" "));//[ 'The', 'morning', 'is', 'upon', 'us.' ]
console.log(para.split(""));//['T', 'h', 'e', ' ', 'm','o', 'r', 'n', 'i', 'n','g', ' ', 'i', 's', ' ','u', 'p', 'o', 'n', ' ','u', 's', '.']
 console.log(para.split('o',2));//[ 'The m', 'rning is up' ]
  console.log(para.split('o')); //[ 'The m', 'rning is up', 'n us.' ]

//trim ()
//1) It removes the white space from both the end
let para1 = "   javaScript";
console.log(para1.trim());//javaScript

//replace()
//1) it only replaces with one charater
console.log(para.replace('n', 'o')) //The moroing is upon us

//replaceAll()
console.log(para.replaceAll('n', 'o'));//The moroiog is upoo us.

    
    
    
    
    
  






