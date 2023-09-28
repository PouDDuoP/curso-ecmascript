// Agregado al regex en es9 poder identificar grupos
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2023-09-27');
// console.table imprime una tabla con los resultados
console.table(matchers);