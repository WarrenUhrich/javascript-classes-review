export class Cat { // We didn't say default! We need curly braces in scripts.js
  constructor ( name, age )
  {
    this.name = name;
    this.greeting = 'Meow, my name is: ' + name;
    this.age = parseInt( age );
  }
  meow ()
  {
    const newMeow = document.createElement( 'P' );
    newMeow.textContent = 'MEOW MEOW MEOW!';
    document.body.appendChild( newMeow );
  }
  sayHello ()
  {
    const hello = document.createElement( 'P' );
    hello.textContent = this.greeting;
    document.body.appendChild( hello );
  }
  birthday ()
  {
    this.age = this.age + 1; // Age the cat by one year.
    const showAgeElement = document.createElement( 'P' );
    showAgeElement.textContent = `Meow! I just turned ${this.age} years old!`; // Using a template literal to display a value in a string.
    document.body.appendChild( showAgeElement );
  }
}