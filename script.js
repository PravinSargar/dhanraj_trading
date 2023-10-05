//1} javascript swapping two varibale
// var a=20;
// var b=10;
// let temp;
// temp=a;
// a=b;
// b=temp;
// console.log(a);
// console.log(b);

//2}addition of two program
// var a=10;
// var b=20;
// console.log(a+b);

// 3}iife function(immediatly invoked function expression)
// this is immediatly invoked function expression

// (function(){
//     console.log("hello")
// })();

// 4}higher-order functions are functions that can take other functions as arguments or return functions as values. 

// function greet(name,callback){
//     console.log("Hi hello good night "+name+ "!");
//     callback();
// }
// function saygoodnight(){
//     console.log("call back function");
// }
// greet("Rohit" ,saygoodnight);

// function returning fuction
// function double(factor){
//     return function(number){
//         return factor-number;
//     }
// }
// var a=double(5);
// var b=double(2);
// console.log(b(3));

// 5}currying:it is technique of trasformtion multipe argument into several function as a single argument
// function greet(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(greet(1)(2)(3))

// 6}Defalut parameter :-Default parameters in JavaScript allow you to specify default values for function parameters in case the caller does not provide a value or provides undefined for that parameter. 
// function greet(name="hi",snme="bye"){
//  console.log("greeting "+name+"! "+snme+"!");
// }
// greet();

// 7}babel -Babel is a popular JavaScript compiler. It is mainly used to convert ECMAScript 2015+ (ES6+) code into a backward-compatible version of JavaScript that can be executed by older JavaScript engines.
// Source code in ES6+
// const greeting = () => {
//     console.log("Hello, World!");
// };

// Babel-processed code (ES5)
// "use strict";

// var greeting = function greeting() {
//     console.log("Hello, World!");
// };

// 8}The rest parameter allows you to represent an indefinite number of arguments as an array in a function parameter.
// function sum(...numbers){
//     return numbers.reduce((acc,num)=>acc+num);
// }
// console.log(sum(1,2,3,4,5));

// 9}Spreading Arrays:
// The spread operator allows you to expand elements of an array or object.
// const num=[1,2,3,4,5];
// const copynum=[...num];
// console.log(copynum);

// 10}destructuring assignment used to unpack value from array or properties from object 
function printperson({name,sname,age}){
    console.log(`this is ${name} of ${sname} and ${age}`)
}
const person={
    name:"pravin",
    sname:"sargar",
    age:12
}
printperson(person)
