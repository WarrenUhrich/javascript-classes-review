import Dog from './Dog.Class.js';
import { Cat } from './Cat.Class.js';

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
myCat.birthday();
myCat.birthday();