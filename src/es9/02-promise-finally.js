// Promise
const friendlyFunction = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Funciono!!');
    } else {
      reject('Fallo!!');
    }
  })
}

friendlyFunction()
  .then(response => console.log(response))  // Mientras
  .catch(err => console.log(err))  // Error
  .finally(() => console.log('Promesa Finalizada'));  // Finalizo 