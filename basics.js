//'use strict';


// function decalaration vs function expression
// hoisitng
// function expressions should be called after initialization

//Introduction to Objects
let obj = { a: 'dsfg', b: "fsf",f:()=>'ff' }
console.log(obj.a)
//let a='985';
console.log(obj.f())
//Dot vs. Bracket Notation
//console.log(obj.'' + a)// It won't come
// use real property name

// If we try to access the property that is available we will undefined
// But you can try like this

let b = 'b';
console.log(obj[b])

//Object Methods
obj = { a: 'dsfg', b: "fsf", f: function () { return this.a + 985 } }
console.log(obj.f())
obj = {
    a: 'dsfg', b: "fsf", f: () => {
        console.log(this)
    }
}
console.log(obj.f());


//How Javascript works behind the scenes

// A high level of overview of Javascript
//JAVASCRIPT IS A HIGH-LEVEL, PROTOTYPE-BASED OBJECT-ORIENTED,
/*MULTI-PARADIGM, INTERPRETED OR JUST-IN-TIME COMPILED, 
DYNAMIC, SINGLE-THREADED, GARBAGE-COLLECTED PROGRAMMING 
LANGUAGE WITH FIRST-CLASS FUNCTIONS AND A NON-BLOCKING 
EVENT LOOP CONCURRENCY MODEL
*/
//The JavaScript Engine and Runtime
// JS Engine is a program that executes JS code
// V8 Engine is used by chrome and nodejs
// SpiderMonkey is used by firefoxgh
// Js engine always has a call stack and a heap
// Call stack is where our code is executed
// Heap is an unstructured memory pool which stores all the objects that our application needs
// How the code is compiled and executed

// Parsing: The code is parsed and converted into a data structure called Abstract Syntax Tree
// Compilation: The AST is converted into machine code
// Execution: The code is executed
// Optimization: The code is optimized
// The JS Runtime
// JS Engine + Web APIs + Callback Queue + Event Loop
// Web APIs: DOM, AJAX, Timeout
// Callback Queue: Events, Clicks, AJAX responses
// Event Loop: Looks at the call stack and callback queue
// If the call stack is empty, it takes the first callback from the queue and pushes it to the call stack
// The JS Runtime
// This AST is not related to the DOM
//First the code is unoptimized and then optimized
// For faster execution, the code is optimized

// JS RUNTIME in the  browser
// JS Engine=Heap+Call Stack
// Web APIs=DOM, AJAX, Timeout
// Runtime is just like a container for all the things that we need to run our JS code
// JS Engine is a part of the runtime
// JS Engine is a program that executes JS code
// V8 Engine is used by chrome and nodejs
// callback queue is also a part of the runtime

// JS RUNTIME in the  browser
// JS Engine=Heap+Call Stack
// There is no web      APIs in the nodejs runtime
// But we have c++    bindings

//Execution Contexts and The Call Stack
//after compilation
// It creates global exect(for top-level global code)
// What is an execution context?
// Execution context is an environment in which a piece of JS is executed
// There is one only one global execution context
// It stores all the necessary information for the execution of the code
// It consists of:
// Variable environment- let, const, var, function declarations,arguments object
// Scope chain
// This keyword


// Variable environment: Where the variables live and how they relate to each other in memory
// When we declare arrow  functions, this keyword doesn't have arguments object
//Scope and The Scope Chain

// Scope concepts
// ScopingL How our program's variables are organized and accessed
// Lexical Scopting: Scoping is controlled by placement of functions and blocks in the code
// Scope: Space or environment in which a certain variable is declared (variable environment in practice)

//3 types of scope
// Global scope - local scope - block scope

// Function are also block scope (only in strict mode)

// Scope chain: Order in which functions are written in the code

//Scoping in Practice

console.log('\n');
function calcAge(birthYear) {
    const age = 2037 - birthYear;
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    
    console.log(firstName);
    function printAge() {
        let output = `${firstName} you are ${age}, born in ${birthYear}`;
        console.log(output);
    }
    if (birthYear >= 1981 && birthYear <= 1996) {
        //const firstName = 'Steven';
        var millenial = true;
        const firstName = 'Steven';
        const str = `Oh, and you're a millenial, ${firstName}`;
        console.log(str);
        function add(a, b) {
            return a + b;
        }
        
        output = 'NEW OUTPUT';
    }
    //console.log(str) let  and const are block scoped
    console.log(millenial);// var is not  block scoped but function scoped
    printAge();
    //console.log(add(2, 3));// It is accessible because it is in the block scope // but it is not accessible in strict mode
    
    console.log(output);
    return age;
}
const firstName = 'Jonas';// It is in global execution context
calcAge(1991);
console.log(firstName);
//console.log(age);// It is not accessible

//console.log(millenial);// It is not accessible



//Variable Environment: Hoisting and The TDZ

// Hoisting in practice
// Execution context is created in 3 phases
// Variable environment is created in the creation phase
//Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared.Variables lifted to the top of their scope
// Behind scenes
// Before execution, code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object

//Temporal dead zone: Cannot access variables before they are declared

// Why TDZ?
// Makes it easier to avoid and catch errors: accessing variables before declaration is bad practice


// Another reaseon for TDZ const variables are not initialized before declaration because values should not be changed

// Why hoisting?

// Using functions before declaration
// var hoisting is just a byproduct


//Hoisting and TDZ in Practice
console.log(me)
//console.log(job) This is in Temporal Dead Zone
var me = 'Jonas';
let job = 'teacher';
const year = 1991;;
// Functions

console.log(addDecl(2, 3));
//console.log(addArrow(2, 3));// Error
//Error for var console.log(addArrow2(2, 3));// addArrow2 is not a function
console.log(addArrow2);
function addDecl(a, b) {
    return a + b;
}
const addExpr = function (a, b) {
    return a + b;
}   
const addArrow = (a, b) => a + b;
var addArrow2 = (a, b) => a + b;
// Any variable declared with var is hoisted and initialized with undefined

// Example
// numProducts is hoisted and initialized with undefined

if (!numProducts)// Underfined is a falsy value
    deleteShoppingCart();

var numProducts = 10;
function deleteShoppingCart() {
    console.log('All items deleted!');
}
// Don't use var in modern JS code because it is not block scoped and it is hoisted and initialized with undefined and it can cause bugs in the code
var x = 1;
// The above variable will be in window object because it is declared with var
//console.log(x===window.x)



//The this Keyword
// Special variable that is created for every execution context (every function)
// Takes the value of (points to) the "owner" of the function in which the this keyword is used
// this keyword is not static
// The value of the this keyword is only assigned when the function is actually called

// Method: this = <Object that is calling the method>
/*const jonas = {
    name: 'Jonas',
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    }
    
}
jonas.calcAge();
*/
// Simple function call: this = undefined
// undefined will occur in strict mode
// otherwise it will point to the global object ie window object
const calcAges = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this,236);
}       
calcAges(1991);

// another method
// Arrow functions: this = <this of surrounding function (lexical this)>
// Arrow functions don't get their own this keyword
// They get their this keyword from the surrounding function (lexical this)
// ie closest parent function

// Event listener this keyword=<DOM element that the handler is attached to>


//The this Keyword in Practice

console.log(this);
const calcAge1 = function (birthYear) { 
    console.log(2037 - birthYear);
    console.log(this);// It will be undefined in strict mode else it will be window object
}   
calcAge1(1991);
const calcAge2 = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);// It will be window object// this is lexical this
}   

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    }   ,
    calcAgeArrow: () => {
        console.log(this);
        console.log(2037 - this.year);
    }
}
jonas.calcAge();
jonas.calcAgeArrow();
const matilda = {   
    year: 2017, 
};
matilda.calcAge = jonas.calcAge;//method borrowing
console.log(matilda);
matilda.calcAge();// Here this keyword will point to matilda object

const f = jonas.calcAge;
f()// it is a regular function call so this keyword will be undefined
