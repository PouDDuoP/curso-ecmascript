// Generadores es un tipo especial de funcion
function* iterate(array) {
  for (let value of array) {
    yield value;
  } 
}

const it = iterate(['Kevin', 'Danifer', 'Jefferson', 'Edinson', 'Keros']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);