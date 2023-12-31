const promiseOne = new Promise((resolve, reject) => reject("Reject"));
const promiseTwo = new Promise((resolve, reject) => resolve("Resolve"));
const promiseThree = new Promise((resolve, reject) => resolve("Resolve 2"));

// Genera un array con cada una de las promesas y sus respuestas
Promise.allSettled([promiseOne, promiseTwo,  promiseThree])
  .then(response => console.log(response));