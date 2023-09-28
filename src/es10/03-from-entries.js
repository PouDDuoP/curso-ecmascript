// Object.entries ya no solo transforma el objeto en un array de arrays, podemos hacer cambios inverso desde un array de arrays a un objeto.
const entries = new Map([['name', 'Kevin'], ['age', 29]]);
console.log(entries);
console.log(Object.fromEntries(entries));