// -------------------------------------
// VAR (Function-scoped, Hoisted)
// -------------------------------------
console.log(`Before var declaration: ${myVar}`); // Output: undefined (due to hoisting)
var myVar = 'I am a var variable';
console.log(`After var declaration: ${myVar}`); // Output: 'I am a var variable'

// Var is function-scoped, so it's accessible inside functions
function testVarScope() {
    var localVar = 'I am local to this function';
    console.log(localVar); // Output: 'I am local to this function'
}
testVarScope();
// console.log(localVar); // Error: localVar is not defined (only available inside the function)

// -------------------------------------
// LET (Block-scoped, Not Hoisted Like var)
// -------------------------------------
try {
    console.log(`Before let declaration: ${myLet}`); // Error: Cannot access 'myLet' before initialization
} catch (e) {
    console.log(e);
}

let myLet = 'I am a let variable';
console.log(`After let declaration: ${myLet}`); // Output: 'I am a let variable'

// Let is block-scoped, meaning it's only accessible within the block it is declared in
if (true) {
    let blockLet = 'I exist only inside this block';
    console.log(blockLet); // Output: 'I exist only inside this block'
}
// console.log(blockLet); // Error: blockLet is not defined (only available inside the block)

// -------------------------------------
// CONST (Block-scoped, Constant)
// -------------------------------------
try {
    console.log(`Before const declaration: ${myConst}`); // Error: Cannot access 'myConst' before initialization
} catch (e) {
    console.log(e);
}

const myConst = 'I am a constant';
console.log(`After const declaration: ${myConst}`); // Output: 'I am a constant'

// Const also follows block scope, like let
if (true) {
    const blockConst = 'I exist only inside this block';
    console.log(blockConst); // Output: 'I exist only inside this block'
}
// console.log(blockConst); // Error: blockConst is not defined

// Trying to reassign a const variable will cause an error
try {
    myConst = 'New Value'; // Error: Assignment to constant variable
} catch (e) {
    console.log(e);
}

// -------------------------------------
// VARIABLE TYPES
// -------------------------------------

// Number
let num = 100;
console.log(`Number type: ${typeof num}`); // Output: 'number'

// String
let str = "Hello, World!";
console.log(`String type: ${typeof str}`); // Output: 'string'

// Boolean
let isTrue = true;
console.log(`Boolean type: ${typeof isTrue}`); // Output: 'boolean'

// Object
let obj = { name: 'John', age: 25 };
console.log(`Object type: ${typeof obj}`); // Output: 'object'

// Array (which is technically a special kind of object)
let arr = [1, 2, 3];
console.log(`Array type (object): ${typeof arr}`); // Output: 'object'

// Undefined (a declared variable with no assigned value)
let notAssigned;
console.log(`Undefined type: ${typeof notAssigned}`); // Output: 'undefined'

// Null (intentional absence of value, but still returns 'object' — a historical bug in JavaScript)
let emptyValue = null;
console.log(`Null type (bugged as object): ${typeof emptyValue}`); // Output: 'object'

// Symbol (unique and immutable)
let uniqueKey = Symbol();
console.log(`Symbol type: ${typeof uniqueKey}`); // Output: 'symbol'

// -------------------------------------
// HOISTING CONCEPT
// -------------------------------------

// Var gets hoisted to the top but is initialized as undefined
console.log(`Before var hoisting: ${hoistedVar}`); // Output: undefined
var hoistedVar = 'Hoisted!';
console.log(`After var hoisting: ${hoistedVar}`); // Output: 'Hoisted!'

// Let and const also get hoisted, but they are in a "Temporal Dead Zone" until initialized
try {
    console.log(`Before let hoisting: ${hoistedLet}`); // Error: Cannot access 'hoistedLet' before initialization
} catch (e) {
    console.log(e);
}
let hoistedLet = 'Hoisted but inaccessible before initialization';
console.log(`After let hoisting: ${hoistedLet}`); // Output: 'Hoisted but inaccessible before initialization'

try {
    console.log(`Before const hoisting: ${hoistedConst}`); // Error: Cannot access 'hoistedConst' before initialization
} catch (e) {
    console.log(e);
}
const hoistedConst = 'Hoisted but inaccessible before initialization';
console.log(`After const hoisting: ${hoistedConst}`); // Output: 'Hoisted but inaccessible before initialization'

// -------------------------------------
// MUTABILITY OF CONST OBJECTS
// -------------------------------------

// Const objects and arrays can have their properties/elements modified, but cannot be reassigned
const person = { name: 'Alice', age: 30 };
person.age = 31; // You can modify properties
console.log(`Modified const object:`, person); // Output: { name: 'Alice', age: 31 }

try {
    person = { name: 'Bob', age: 40 }; // Error: Assignment to constant variable
} catch (e) {
    console.log(e);
}

const numbers = [1, 2, 3];
numbers.push(4); // You can modify array elements
console.log(`Modified const array:`, numbers); // Output: [1, 2, 3, 4]

try {
    numbers = [5, 6, 7]; // Error: Assignment to constant variable
} catch (e) {
    console.log(e);
}
