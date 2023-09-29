// Optional chaining utilizado para no roper la dinamica del codigo cuando no llegue el parametro requerido 
const users = {
  poud: {
    country: 'VE'
  },
  kevin: {
    country: 'NZ'
  }
}

console.log(users.poud);
console.log(users.poud.country);
console.log(users.poud.age);

// Aplicamos Optional chaining
console.log(users?.kkk?.country);