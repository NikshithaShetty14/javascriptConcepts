//Math
//1) abs() 2) Math.round() 3)Math.ceil() 4)Math.floor() 5)Math.min() 6)Math.max()

 console.log(Math); //You get an object and you can check the properties.

//1)abs()
//It gives only Positive Numbers
//If the input is a negative number, it returns the positive version of that number..
console.log(Math.abs(-4)); //4
console.log(Math.abs('f')); //NAN
console.log(Math.abs(2*2*6)) //24
console.log(Math.abs(8-6-8)) //6
console.log(Math.abs()); //NAN

//2)Math.round()
//less than 0.5, the number is rounded down.
// 0.5 or greater, the number is rounded up.
console.log(Math.round(4.5)); //5
console.log(Math.round(-4.2)); //-4
console.log(Math.round(458.36987));//458

//3)Math ceil() (top) round a number upward to the nearest integer
console.log(Math.ceil(4.2)) //5
console.log(Math.ceil(6.6)) //7
console.log(Math.ceil(-6.6)) // -6

//4)Math.floor() (down) number downward to the nearest integer
console.log(Math.floor(4.2))//4
console.log(Math.floor(4.9)) //4
console.log(Math.floor(-4.2))//-5
console.log(Math.floor(-4.9)) //-5


//5)Math.min()
//1)It used to fin a minimum number
console.log(Math.min(5, 4,9, 2));//2

//6) Math.max()
//It will find the maxium number
console.log(Math.max( 5, 4, 9, 2))//9

//7) Math.random() 
//1)It gives the range from 0 to 1 and every time it gives the random number
console.log(Math.random()); 
console.log(Math.random()*10)//now one value wiil shift(0.95)now it start from 0 to 9 
console.log((Math.random()*10) + 1);// To avoid 0 in the starting .The range from 1 -10.
