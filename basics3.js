//Sets
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);// pass an iterable
// Sets are iterables and they are not ordered
console.log(ordersSet);
console.log(new Set('Jonas'));
console.log(new Set());// empty set
// methods
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);
ordersSet.delete('Risotto');
console.log(ordersSet);
ordersSet.delete('Risotto');
ordersSet.delete('Risotto');
console.log(ordersSet);
/*const [a, b ] = ordersSet
console.log(a, b);
*/
console.log(ordersSet[0]);// undefined There are no indexed in sets
//ordersSet[0] = 'Bread';// TypeError: Cannot set property 0 of object #<Set> which has only a getter

//ordersSet.clear();
console.log(ordersSet);
for(const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
// spread operator works on all iterables
console.log(staffUnique);
console.log(new Set(staff).size);

console.log(new Set('jonasschmedtmann').size);

//Maps: Fundamentals
// Map is a data structure that we can use to map values to keys
// In objects we can only use strings as keys
// But in maps we can use any type of key
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));// set method returns the map
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open').set(false, 'We are closed');
// we can chain the set method since it returns the updated map
console.log(rest);
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.get('85')) // undefined
console.log(rest.has('categories'));
console.log(rest.has('85'));
rest.delete(2);// delete method returns true if the element is deleted
// But if the element is not deleted it returns false
// But it is very slow process
console.log(rest);
rest.delete(2);
console.log(rest);
console.log(rest.size);
//rest.clear();
console.log(rest);
rest.set([1, 2], 'Test');
console.log(rest);
console.log(rest.get([1, 2]));// undefined
// Because [1, 2] is not the same as [1, 2] in the heap
// so it is undefined
// But if we store the array in a variable and then use it
// then it will work
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
//rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

// Maps: Iteration
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],  
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try Again']
]);
console.log(question);
//console.log(Object.entries(openingHours));
// Convert object to map
const openingHours = {
    thu: {
        open: 12,
        close: 22
    },
    fri: {
        open: 11,
        close: 23
    },
    sat: {
        open: 0,
        close: 24
    }
};

const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// Iteration over map
for(const [key,value]  of question) {
    console.log( key, value);
}
// conver map to array
console.log([...question]);
console.log(question.entries())
console.log([...question.keys()]);
console.log([...question.values()]);
console.log(question.values());// returns an iterator object

//Summary: Which Data Structure to Use?
// There are 4 different data structures in JS
// 1. Arrays
// 2. Sets
// 3. Objects
// 4. Maps
// When to use which?
// 1. Use arrays when you need ordered list of values
// 2. Use sets when you need to work with unique values
// 3. Use objects when you need key/value pairs
// 4. Use maps when you need key/value pairs and need keys that are not strings
// Other built in data structures
// 1. WeakMap
// 2. WeakSet
// Arrays vs Sets
// 1. Arrays are ordered lists
// 2. Sets are unordered lists
// 3. Arrays can contain any type of values
// 4. Sets can only contain unique values
// 5. Sets are faster for checking if a certain value is in the set
// 6. Arrays are faster to iterate through
// 7. Use arrays when you need to manipulate data
// 8. Use sets when you need to work with unique values
// Objects vs Maps
// 1. Objects are the most used data structure in JS
// 2. Maps are better in performance
// In large objects maps are faster than objects

//Coding Challenge #3


//Working With Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal'));
console.log(airline.slice(4));
console.log(airline.slice(4, 7));// end index is not included
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
console.log(airline.slice(1, -2));
const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if(s === 'B' || s === 'E') console.log('You got the middle seat');
    else console.log('You got lucky');
}   
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
// Strings in JS are primitive values
// why do we have methods on strings?
// JS converts strings to objects when we call methods on strings
// This is called boxing
console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));

// Working With Strings - Part 1

// methods in strings
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// Fix capitalization in name
const passenger = 'jOnAS';// Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// Strings are immutable
// We cannot change strings
// We can only create new strings
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane1 = 'A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Air'));
console.log(plane1.startsWith('A3'));
if (plane1.startsWith('A3') && plane1.endsWith('neo')) {
    console.log('Part of the NEW ARirbus family');
}
// Practice exercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if(baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are not allowed on board');
    } else {
        console.log('Welcome aboard');
    }
}
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//Working With Strings - Part 3
// split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName, lastName);
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];
    for(const n of names) {
        //namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
}
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'))
console.log('Jonas'.padStart(25, '+'));
console.log(message.padEnd(25, '+'));
console.log('Jonas'.padEnd(25, '+').padEnd(30, '+'))   
const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(5));
const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
}
planesInLine(5);

//Coding Challenge #4
//String Methods Practice

const flights = '_Delayed_Departure;fao93766109;txl2133758440;11:25+'
    + '_Arrival;bru0943384722;fao93766109;11:45+'
    + '_Delayed_Arrival;hel7439299980;fao93766109;12:05+'
    + '_Departure;fao93766109;lis2323639855;12:30'

const getCode=str=>str.slice(0,3).toUpperCase();
for (const flight of flights.split('+')) {
    const [type, from, to, time] = flight.split(';');
    const output=`${type.startsWith('_Delayed') ? '🔴' : ''}${type.replace('_', ' ')} from ${from.slice(0, 3).toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${time.replace(':', 'h')}) ${getCode(from)} ${getCode(to)}`.padStart(50);
    console.log(output);
}

