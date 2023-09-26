// Paramtros por Default anterior a ES6
function newUser(name, age, country) {
  var name = name || 'Kevin';
  var age = age || 29;
  var country = country || 'VE';
  console.log(name, age, country);
}

newUser();
newUser('Adrian', 30, 'NZ');

// Paramtros por Default desde ES6 
function newAdmin(name = 'Kevin', age = 31, country = 'CAN') {
  console.log(name, age, country);
}

newAdmin();