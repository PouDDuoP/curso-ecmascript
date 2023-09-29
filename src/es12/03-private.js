// setters getters
class UserSudo {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // con # indicamos que se vuelve un metodo privado
  #speak() {
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
console.log(developer.speak); // es privado por ello no puede acceder directamente desde la instancia y si desde el metodo get