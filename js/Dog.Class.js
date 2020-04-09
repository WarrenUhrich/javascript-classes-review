export default class Dog {
  bark ()
  {
    const newBark = document.createElement( 'P' );
    newBark.textContent = 'BARK BARK BARK!';
    document.body.appendChild( newBark );
  }
}
