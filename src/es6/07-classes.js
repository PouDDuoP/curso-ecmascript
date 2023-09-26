// Classes 
// Declaracion de la clase
class User {};

// Instancia de la clase 
// const newUser = new User();

class UserAdmin {
  greeting() {
    return 'hello!';
  }
};

const newUser = new UserAdmin();
console.log(newUser.greeting());

const nob = newAdmin();
console.log(nob.greeting());

class UserRoot {
  // constructor
  constructor() {
    console.log('New User!!!');
  }
  greeting() {
    return 'hello!';
  }

}

const kevin = new UserRoot();

// this 
class UserSuperRoot {
  // constructor
  constructor(name) {
    this.name = name;
  }
  speak() {
    return 'Hello in UserSuperRoot';
  }
  greeting() {
    return ` ${ this.speak() } ${ this.name } `;
  }
}

const adrian = new UserSuperRoot('Adrian');
console.log(adrian.greeting());

// setters getters
class UserSudo {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    return 'Hello in UserSudo';
  }
  greeting() {
    return ` ${ this.speak() } ${ this.name } `;
  }

  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const developer = new UserSudo('Kevin', 25);
console.log(developer.uAge);
console.log(developer.uAge = 30);