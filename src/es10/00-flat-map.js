// flat map nos retorna una matriz cualquier sub matriz
const array = [1,2,3,4,5, [2,3,4,5, [3,4,7]]];
// .flat(n) indica la profundidad de niveles dentro del array a botener
console.log(array.flat(3));

// .flatMap mapea y luego aplana 
const arrayAgain = [1,2,3,4,5];
// .flatMap(logica interna) retorna el valor indicado y luego reraliza la transformacion indicada en este caso multiplico por 2
console.log(arrayAgain.flatMap( v => [v, v * 2] ));