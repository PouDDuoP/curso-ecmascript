// agregado el uso de spread (...) sobre objetos, utilizado mas comunmente en manipulaciones de objetos 
const user = { username: 'poud', age: 29, country: 'VE' };
const { username, ...values } = user;
console.log(username);
console.log(values);