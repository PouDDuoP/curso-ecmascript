// Variable con var
var lastName = 'Adrian';
lastName = 'Kevin';
console.log(lastName);

// Variable con let
let fruit = 'Apple';
fruit = 'Orange';
console.log(fruit)

// Constante con const
const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () => {
  if (true) {
    var fruit1 = 'Apple'; // function scope
    let fruit2 = 'Orange'; // block scope
    const fruit3 = 'Banana'; // block scope
  }

  console.log(fruit1)
  console.log(fruit2)
  console.log(fruit3)
}

fruits();