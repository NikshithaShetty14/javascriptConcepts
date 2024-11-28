// scope( function if else {})
// var a = 10;
// let b = 20;
// const c =30;

if(true){
    // this is the block scope
}

let a = 300;


if(true){
    let a = 20;
    const s = 15;
    console.log("Inner", a)

}

console.log("global", a);

