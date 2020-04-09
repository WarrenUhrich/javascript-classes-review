export class Cat { // We didn't say default! We need curly braces in scripts.js
  constructor ( name = '', age = 0 ) // Default parameters.
  {
    this.name = name;
    this.greeting = 'Meow, my name is: ' + name;
    this.age = parseInt( age );
    this.toys = []; // Empty array.
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
  addToy ( newToy = false ) // Default parameter.
  { // Make sure our newToy is set!
    if ( newToy !== false )
    { // Add the new toy to our toys array.
      this.toys.push( newToy );
    }
  }
  showToys ()
  {
    const toysList = document.createElement( 'UL' );
    for ( let toy of this.toys ) // "For...Of" loop.
    { // Loop through the array of toys and add them to the list.
      const toyLI = document.createElement( 'LI' );
      toyLI.textContent = toy;
      toysList.appendChild( toyLI );
    }
    document.body.appendChild( toysList );
  }
}