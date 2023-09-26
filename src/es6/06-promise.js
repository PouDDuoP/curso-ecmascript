// Promise
const friendlyFunction = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Funciono!!');
    } else {
      reject('Fallo!!');
    }
  })
}

friendlyFunction()
  .then(response => console.log(response))
  .catch(err => console.log(err));