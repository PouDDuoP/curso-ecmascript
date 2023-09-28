const string = 'Hello!';
// con .padStart() rellenamos un string donde la cantida de caracteres supere al string original con el string indicado en este caso 'Hi Bro.' al principio 
console.log(string.padStart(20, 'Hi Bro.'))
// con .padEnd() rellenamos un string donde la cantida de caracteres supere al string original con el string indicado en este caso 'Whatsup' al final
console.log(string.padEnd(20, 'Whatsup'))