const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async!! Resolve'), 2000)
      : reject(new Error('Error!'));
  });
}
// Async Asinconismo 
const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log('Hello!!');
}

console.log('Before');
anotherFn();
console.log('After');