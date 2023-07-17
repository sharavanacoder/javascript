//Regular Functions vs. Arrow Functions
'use strict'
var firstName = 'Matilda';
const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        console.log(this);
        const self = this;
        console.log(2037 - this.year);
        const isMillenial = function () {
            console.log(this);
            console.log(self.year >= 1981 && self.year <= 1996);
        };
        const isMillenialArrow = () => {
            console.log(this);  
            console.log(this.year >= 1981 && this.year <= 1996);        
        };     
        isMillenial();
        isMillenialArrow();
    },
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);// points to glabal object and also it takes the var value of firstName
    },//this will be undefined
}
jonas.greet();
//console.log(this.firstName)
jonas.calcAge();    

// Arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
}
addExpr(2, 5);
addExpr(2, 5, 8, 12);
var addArrow = (a, b) => {
    //console.log(arguments,'sfgs');
    return a + b
};    
addArrow(2, 5, 8);


//Primitives vs. Objects (Primitive vs. Reference Types)

// Primitive Types
// Number, String, Boolean, Undefined, Null, Symbol, BigInt
let age = 30;
let oldAge = age;
age = 31;
console.log(age);

//Reference Types
const me = {
    name: 'Jonas',
    age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
//Promitive Types are stored in call stack and Reference Types are stored in heap
// when we declare a variable as a object then the variable points to a peice of memory in stack and that memory points to a memory in heap

//Primitives vs. Objects in Practice

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,    
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);

//Copying Objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,  
    family: ['Alice', 'Bob'],    
};
// to merge 2 objects and create a new object
// it is a shallow copy
// it only copies the properties of the first level
// it does not copy the nested objects
// but the copy should be deep copy
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);
// we can use lodash library to do deep copy


//-------------------------------------------------//

//Data Structures, Modern Operators and Strings

//Destructuring Arrays

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    openingHours: { 
        thu: {  
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {  
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(starterIndex, mainIndex, time, address);
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
    },
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }  ,
};
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z);
const [first,  second] = restaurant.categories;
console.log(first, second);
const [first1, , third] = restaurant.categories;
console.log(first1, third);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables
//const temp = main;
//main = secondary;
//secondary = temp;
//console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);// swapping variables

// Recieve 2 return values from a function
console.log(restaurant.order(2, 0));
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
const nested = [2, 4, [5, 6]];
const [i, , j]= nested;
console.log(i, j);
const [k, , [l, m]] = nested;   
console.log(k, l, m);

// Default values
const [p, q, r] = [8, 9];
console.log(p, q, r);
const [p1 = 1, q1 = 1, r1 = 1] = [8, 9];
console.log(p1, q1, r1);

//Destructuring Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);
// default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// mutating variables
let a1 = 111;
let b1 = 999;
const obj = { a1: 23, b1: 7, c1: 14 };
({ a1, b1 } = obj); // we need to wrap the whole thing in paranthesis
console.log(a1, b1);
// nested objects
const {fri:{open:o,close:c}}=openingHours;
console.log(o, c);
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});
restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
});


// The Spread Operator (...)
// It is used to expand an array into all its elements
const arr1 = [7, 8, 9];
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr1];
console.log(newArr);
console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
// The big difference between spread operator and destructuring is that spread operator takes all the elements from the array and also doesn't create new variables
// spread operator takes all the elements from the array and also doesn't create new variables
// 2 use cases of spread operator

// copy array
const mainMenuCopy = [...restaurant.mainMenu];//shallow copy
console.log(mainMenuCopy);
// join 2 arrays
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);
// spread operator works on all iterables
// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
//console.log(`${...str} Schmedtmann`);// it is not possible to use spread operator inside template literals
// using spread operator to pass multiple arguments to a function
const ingredients = ['mushrooms', 'spinach', 'olives'];
restaurant.orderPasta(...ingredients);
// spread operator works on objects since ES2018
// Real world example
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };// order doesn't matter
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };// shallow copy
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
console.log(restaurantCopy);
console.log(restaurant);

// Rest Pattern and Parameters


// 1) Destructuring
// rest is used to build arrays

// SPREAD, because on RIGHT side of =
const arrs = [1, 2, ...[3, 4]];// spread operator

// REST,because on LEFT side of=
const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others);
const [pizza, , risotto,...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood);
// In rest pattern, it should be the last element in the destructuring assignment
// otherwise we will get a error called rest element must be last element

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat,weekdays);

// 2) Functions
const add = function (...numbers) {// ...(REST) parameters used to build new array
    console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
        sum += numbers[i];
    console.log(sum);
}
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);
const x1 = [23, 5, 7];
add(...x1);// spread operator

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
// in rest pattern, we would write variables names,sepates by commas and then we use the rest operator to collect all of the other arguments





// Short Circuiting (&& and ||)


// there are properties in logical operators that can use any data type, return any data type and short-circuiting

console.log('----OR----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');// 3
console.log('' || 'Jonas');// Jonas
console.log(true || 0);// true
console.log(undefined || null);// null

console.log(undefined || 0 || '' || 'Hello' || 23 || null);// Hello
console.log(undefined || false)
console.log(undefined || 0 || '' || "hello:" || null);// null
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);
console.log('----AND----');
console.log(0 && 'Jonas');// 0
console.log(7 && 'Jonas');// Jonas
console.log('Hello' && 23 && null && 'jonas');// null
console.log(undefined && null)
console.log('Hello' && 23 && 'jonas');// jonas
console.log(undefined && true)
// Practical example
if (restaurant.orderPizza) {    
    restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// if the first value is a truthy value, then the second value will be returned
// if the first value is a falsy value, then the first value will be returned


// The Nullish Coalescing Operator (??)
// Nullish: null and undefined (NOT 0 or '')

restaurant.numGuests = 0;
// If it takes 0  value, it will be falsy value
const guestss = restaurant.numGuests || 10;
console.log(guestss);
const guestssCorrect = restaurant.numGuests ?? 10;

//Logical Assignment Operators
const rest1 = {
    name: 'Classico Italiano',
    numGuests: 0,
};
const rest2 = {
    name: 'Classico',
    owner: 'fsf'
};

/*rest1.numGuests||=10;// logical or assignment operator
//rest1.numGuests = rest1.numGuests || 10;
console.log(rest1);
//rest2.numGuests = rest2.numGuests || 10;
rest2.numGuests||=10;
console.log(rest2);
*/
// nullish assignment operator (null or undefined)
//rest2.numGuests ??= 10;
console.log(rest1);
rest1.owner =rest1.owner && 'Jonas';
rest2.owner = rest2.owner && '<Anonymous>';
console.log(rest2);
console.log(rest1);

// logical and assignment operator
/*rest1.numGuests &&= 10;
console.log(rest1);
rest2.numGuests &&= 10;
console.log(rest2);
rest1.owner &&= 'Jonas';
console.log(rest1);
rest2.owner &&= '<Anonymous>';
console.log(rest2);
*/

//ES-6  for-of loop
// Looping Arrays: The for-of Loop
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu2) console.log(item);
for (const item of menu2.entries()) {
     console.log(item);
    console.log(`${item[0] + 1}: ${item[1]}`);
}
for (const [i, el] of menu2.entries()) {  
       
    console.log(`${i + 1}: ${el}`);
}
console.log([...menu2.entries()]);
console.log(...menu2.entries());

// Enhanced Object Literals
// ES-6 provides 3 ways to write object literals
const weekdays1 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours1={
    [weekdays1[3]]: {
        open: 12,
            close: 22,
        },
    [`day:${9+1}`]: {
        open: 11,
        close: 23,
        },
    sat: {
        open: 0,
        close: 24,
        },
}


const restaurant1 = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu1: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu1: ['Pizza', 'Pasta', 'Risotto'],
    // ES6 enhanced object literals
    openingHours1,
    // second way to write object literals in method
    order(starterIndex, mainIndex) {
        return [this.starterMenu1[starterIndex], this.mainMenu1[mainIndex]];
    },
    
};

console.log(restaurant1);

console.log(restaurant.openingHours.mon);

//Optional Chaining (?.)
// ES-6 provides optional chaining operator
// it is used to check if a certain property exists in an object
// if it does, then the property is read from that object
// if it does not, then undefined is returned immediately
// it is used to avoid those error messages
console.log(restaurant.openingHours.mon?.open);
// we can also use nested chaining          
console.log(restaurant.openingHours?.mon?.open);
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
for (const day of days)
{
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(open);
}
// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.ordesr?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [
    {
        name: 'Jonas',
        email: 'hello@gmi'
    }
];
console.log(users[0]?.name ?? 'User array empty');
console.log(users[0]?.namse ?? 'User array empty');
//Looping Objects: Object Keys, Values, and Entries

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);
// Entire object
const entries2 = Object.entries(openingHours);
console.log(entries2);
for(const [key,{open,close}] of entries2)
{
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}