// mejora enahced onject literals
function newUser(user, age, country, idUser) {
  return {
    user,
    age,
    country, 
    id: idUser
  }
}

console.log(newUser('PouD', 29, 'VE', 1));