import Dog from './Dog.Class.js';
import { Cat } from './Cat.Class.js';
import Person from './Person.Class.js';

const myDog = new Dog();
myDog.bark(); // Calling methods...
myDog.greeting();

// Updating properties.
myDog.name  = 'Bear';
myDog.age   = 13;
myDog.breed = 'American Eskimo';

myDog.greeting();

const myCat = new Cat( 'Barley', 17 );
myCat.meow();
myCat.sayHello();
myCat.birthday(); // +1 was 18.
myCat.birthday(); // +1 is now 19.
myCat.addToy( 'ball' );
myCat.addToy( 'scratching post' );
myCat.addToy( 'mouse' );
myCat.showToys();

const myPerson = new Person( 'Fred' );
console.log( myPerson ); // Output object.

// Adding a NEW property after-the-fact using JS' built in "prototype" property.
// Due to JS "hoisting" all instances of the class become aware of the change...
// EVEN if they were already instantiated!
// CAREFUL. Only use this if you CANNOT edit the class of origin!
// In the case of using an external library, it might make sense to /build on/
// their existing class... but if YOU built a class and realize you need more,
// just improve your class directly!
Person.prototype.age = 0; // New property, "age", added to our "blueprint!" Default is zero.

console.log( myPerson );
console.log( myPerson.age );

myPerson.age = 37;
console.log( myPerson );