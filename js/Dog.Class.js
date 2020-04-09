export default class Dog { // Default! We don't need to use curly braces in scripts.js
  constructor ()
  {
    this.name = '';
    this.age = 0;
    this.breed = '';
  }
  bark ()
  {
    const newBark = document.createElement( 'P' );
    newBark.textContent = 'BARK BARK BARK!';
    document.body.appendChild( newBark );
  }
  greeting ()
  {
    // Create elements.
    const newGreeting  = document.createElement( 'DL' );
    const ngNameTitle  = document.createElement( 'DT' );
    const ngAgeTitle   = document.createElement( 'DT' );
    const ngBreedTitle = document.createElement( 'DT' );
    const ngName       = document.createElement( 'DD' );
    const ngAge        = document.createElement( 'DD' );
    const ngBreed      = document.createElement( 'DD' );
    // Populate elements.
    ngNameTitle.textContent  = 'Name';
    ngAgeTitle.textContent   = 'Age';
    ngBreedTitle.textContent = 'Breed';
    ngName.textContent       = this.name;
    ngAge.textContent        = this.age;
    ngBreed.textContent      = this.breed;
    // Add elements to greeting.
    newGreeting.append(
      ngNameTitle,
      ngName,
      ngAgeTitle,
      ngAge,
      ngBreedTitle,
      ngBreed
    );
    // Add greeting to live DOM.
    document.body.appendChild( newGreeting );
  }
}
