/** Other Types */

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// End Any

// Object
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error (Komenin aja biar bisa di compile hehehe)
create("string"); // Error (Ini juga sama, komenin aja biar bisa di compile hehehe)
// End Object

// Unknown
let value: unknown;

value = true; // OK
value = 42; // OK
value = "Hello World"; // OK
value = []; // OK
// End Unknown

// Never
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("Something failed");
}

function infiniteLoop(): never {
    while (true) {
    }
}
// End Never