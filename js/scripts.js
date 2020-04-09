import Dog from './Dog.Class.js';

const myDog = new Dog();
myDog.bark(); // Calling methods...
myDog.greeting();

// Updating properties.
myDog.name  = 'Bear';
myDog.age   = 13;
myDog.breed = 'American Eskimo';

myDog.greeting();