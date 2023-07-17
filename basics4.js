'use strict';
// A closer look at Functions
// Default Parameters
const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199* numPassengers) {
    // ES5
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}   
createBooking('LH123');

// How Passing Arguments Works: Value vs. Reference
const flight = 'LH234';
const jonas = {
    name: "Jonas",
    passport:24794795865
}
const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    if (passenger.passport === 24794795865)
        console.log("check in");
    else
        console.log("wrong");
}
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
//flightNum=flight
// below we are passing the reference of the object to memory heap
//const passenger = jonas;
const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
}
newPassport(jonas);
console.log(jonas);
checkIn(flight, jonas);
// Above code 2 functions are using the same object in memory heap
// It will create a bug in the code
// Therefore objects are passed by reference and primitives are passed by value in javascript functions



// First-Class and Higher-Order Functions
// First-Class Functions
// JavaScript treats functions as first-class citizens
// This means that functions are simply values
// Functions are just another "type" of object
// Store functions in variables or object properties
// Pass functions as arguments to OTHER functions
// Return functions FROM functions

// Call methods on functions
// eg bind method
// Higher-Order Functions
// A function that receives another function as an argument, that returns a new function, or both
// This is only possible because of first-class functions

//Functions Accepting Callback Functions
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}   
// Function has property called name
// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
    console.log(`Transformed by: ${fn.name}`);
}
transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
    console.log('👋');
};
//document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
// Callback Functions helps us to split up our code into more reusable and interconnected parts
// Callback functions helps us to create abstraction


//Functions Returning Functions
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');
greet('Hello')('Jonas');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas');
/*const greetArr = (greeting) => {
  return (name) => console.log(`${greeting} ${name}`);
};
*/


// The call and apply Methods

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    //book: function(){}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
   
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};
lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW', 
    bookings: [],
};
const book = lufthansa.book;
// Does NOT work because this keyword is undefined
// it is a regular function call
//book.call( 23, 'Sarah Williams');
// There are 3 methods to set the this keyword
// 1. call method
// 2. apply metho
// 3. bind method

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);
const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
// apply method does not receive list of arguments after this keyword
// instead it takes an array of arguments
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
// apply method is not used in modern javascript
// instead we use call method with spread operator
book.call(swiss, ...flightData);
console.log(swiss);

//The bind Method
// The bind method does not immediately call the function instead it returns a new function where this keyword is bound
// So it is set to whatever value we pass into bind
