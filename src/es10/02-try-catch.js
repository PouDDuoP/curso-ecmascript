try {
  hello();
} catch (error) {
  console.log(error);
}

try {
  anotherFn();
} catch { // sin el parametro de error indicadop podmos personalizar el mensaje.
  console.log('Esto es un Error !!!');
}

