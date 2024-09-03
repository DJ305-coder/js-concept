// -------------------------------------
// FUNCTION DECLARATION
// -------------------------------------

// Function declarations are hoisted to the top of their scope, meaning you can call them before they are declared
greet(); // Output: 'Hello, World!'

function greet() {
    console.log('Hello, World!');
}

// This is a standard function declaration. It is hoisted completely, allowing us to call the function before its definition.

// -------------------------------------
// FUNCTION EXPRESSION
// -------------------------------------

// Function expressions are not hoisted, meaning you cannot call them before they are defined
try {
    sayHello(); // Error: Cannot access 'sayHello' before initialization
} catch (e) {
    console.log(e);
}

const sayHello = function () {
    console.log('Hi there!');
};

sayHello(); // Output: 'Hi there!'

// In a function expression, the function is assigned to a variable. It is not hoisted, so you can only use it after the assignment.

// -------------------------------------
// ARROW FUNCTION (ES6)
// -------------------------------------

// Arrow functions are a more concise syntax introduced in ES6 (ECMAScript 2015)
const addNumbers = (a, b) => a + b;
console.log(`Arrow Function Output: ${addNumbers(5, 10)}`); // Output: 15

// Arrow functions do not get their own `this` context, which makes them useful in certain scenarios like callbacks in object methods or event listeners.
// They are not hoisted either, like function expressions.

// -------------------------------------
// ANONYMOUS FUNCTION
// -------------------------------------

// Anonymous functions are functions without a name, commonly used as arguments to other functions
setTimeout(function () {
    console.log('This is an anonymous function inside setTimeout');
}, 1000);

// You can use anonymous functions for things like event handlers, callbacks, or any case where the function is only needed temporarily.

// -------------------------------------
// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// -------------------------------------

// IIFEs are functions that are executed as soon as they are defined
(function () {
    console.log('This function runs immediately after it is defined');
})();

// IIFEs are commonly used to create a private scope or to avoid polluting the global namespace in older JavaScript code.

// -------------------------------------
// HOISTING BEHAVIOR OF FUNCTIONS
// -------------------------------------

// Function declarations are hoisted, allowing us to use them before they are defined
console.log(multiply(2, 3)); // Output: 6

function multiply(a, b) {
    return a * b;
}

// Function expressions and arrow functions are not hoisted, so calling them before the definition will result in an error
try {
    console.log(divide(10, 2)); // Error: Cannot access 'divide' before initialization
} catch (e) {
    console.log(e);
}

const divide = (a, b) => a / b;
console.log(divide(10, 2)); // Output: 5

// -------------------------------------
// FUNCTION PARAMETERS AND DEFAULT VALUES
// -------------------------------------

// Functions can have default parameter values
function greetUser(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}

greetUser(); // Output: 'Hello, Guest!'
greetUser('Alice'); // Output: 'Hello, Alice!'

// Default parameters allow us to provide fallback values in case a function is called without arguments or with `undefined` values.

// -------------------------------------
// REST PARAMETERS (...)
// -------------------------------------

// Rest parameters allow us to accept an indefinite number of arguments as an array
function sumAll(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15

// Rest parameters are useful when we need to accept multiple arguments without specifying how many.

// -------------------------------------
// FUNCTION RETURNING A FUNCTION (CLOSURE)
// -------------------------------------

// A function can return another function, creating a closure
function outerFunction(outerValue) {
    return function innerFunction(innerValue) {
        return outerValue + innerValue;
    };
}

const addWith5 = outerFunction(5);
console.log(addWith5(10)); // Output: 15

// Closures allow a function to "remember" variables from its outer scope even after the outer function has completed execution.

// -------------------------------------
// THIS CONTEXT IN FUNCTIONS
// -------------------------------------

// In traditional function expressions, `this` refers to the calling object, but in arrow functions, `this` is lexically bound (inherited from the surrounding scope)
const obj = {
    name: 'Alice',
    greet: function () {
        console.log(`Hello, ${this.name}`); // 'this' refers to obj
    },
    greetArrow: () => {
        console.log(`Hello, ${this.name}`); // 'this' is inherited from outer scope, likely global in this case
    }
};

obj.greet(); // Output: 'Hello, Alice'
obj.greetArrow(); // Output: 'Hello, undefined' (inherited from outer/global scope)

// Traditional functions get their `this` value based on how they're called, while arrow functions inherit `this` from where they're defined.

// -------------------------------------
// CALLBACK FUNCTIONS
// -------------------------------------

// A callback function is passed as an argument to another function and called within that function
function processData(data, callback) {
    console.log(`Processing: ${data}`);
    callback(); // Calling the callback function
}

processData('Sample Data', function () {
    console.log('Callback function executed');
});
// Output:
// Processing: Sample Data
// Callback function executed

// Callbacks are essential for asynchronous programming and handling events in JavaScript.

// -------------------------------------
// ASYNCHRONOUS FUNCTIONS (ASYNC/AWAIT)
// -------------------------------------

// `async` functions return a promise, and `await` can pause execution until a promise is resolved or rejected
async function fetchData() {
    try {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await data.json();
        console.log(posts);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData(); // Fetches data asynchronously

// `async/await` is a cleaner way to handle promises compared to `.then()` and `.catch()`. It improves code readability.

// -------------------------------------
// GENERATOR FUNCTIONS
// -------------------------------------

// Generator functions return an iterator object that allows you to pause and resume execution using the `yield` keyword
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generateSequence();
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3

// Generators are useful for handling iterative tasks, such as infinite sequences, asynchronous loops, or lazy evaluations.


// Key Concepts about Functions in JavaScript:

// Function Declaration:
// Hoisted to the top of the scope, so can be used before being declared.

// Function Expression:
// Not hoisted, so cannot be used before it is defined.

// Arrow Function:
// Shorter syntax, no separate this context, useful for callbacks and one-liners.

// Anonymous Function:
// Functions without a name, typically used as callbacks or immediately invoked.

// IIFE (Immediately Invoked Function Expression):
// Runs as soon as it is defined, often used for scoping purposes.

// Hoisting:
// Function declarations are hoisted, but function expressions and arrow functions are not.

// Rest Parameters:
// Allows functions to accept an indefinite number of arguments as an array.

// Closure:
// A function that retains access to variables from its outer function's scope.

// Async/Await:
// A modern way to handle asynchronous code, improving readability compared to traditional promises.