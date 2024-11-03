/*  What is module ? 
    - Modules allow you to break up your code into separate files. 
    - This makes it easier to maintain a code-base.
*/

const {calculateSum, calculateStringlength} = require('../module/sum');

// import { calculateStringlength, calculateSum } from "../module/sum.js";

let a = 10;
let b = 20;
 
x = 212;

calculateSum(a,b);
calculateStringlength('hello');
// console.log('calling main file');