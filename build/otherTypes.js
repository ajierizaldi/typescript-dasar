"use strict";
/** Other Types */
// Any
let notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
create({ prop: 0 }); // OK
create(null); // OK
create(42); // Error (Komenin aja biar bisa di compile hehehe)
create("string"); // Error (Ini juga sama, komenin aja biar bisa di compile hehehe)
// End Object
// Unknown
let value;
value = true; // OK
value = 42; // OK
value = "Hello World"; // OK
value = []; // OK
// End Unknown
// Never
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) {
    }
}
// End Never
