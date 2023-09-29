// utiliza regex 
const regex = /\b(Apple)+\b/g;
const fruits = 'Apple, Bannana, Kiwi, Orange, etc, etc';

// matchAll genera un array con todas las coincidencias
for (const match of fruits.matchAll(regex)) {
  console.log(match);
}