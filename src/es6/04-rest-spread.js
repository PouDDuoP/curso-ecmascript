// array destructuring
let fruits = ['Kiwi', 'Apple'];
let [a, b] = fruits;
console.log(a, b, fruits[0])

// Object destructuring
let user = { username: 'Kevin', age: 29 };
let { username, age } = user;
console.log(username, age, user.username);

// Spread operator
let person = { name: 'Kevin', age: 29 };
let country = 'VE';

let data = { ...person, country };
console.log(data);

// Rest 
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2 ,3 ,4 ,5);