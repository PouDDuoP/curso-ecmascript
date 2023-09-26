// Function normal
function cube(num) {
  return (num * num) * num;
}
console.log(cube(3))

// Arrow function
const cube = (num) => {
  return (num * num) * num;
}
console.log(cube(3))

// Arrow function in line
const cube = num => (num * num) * num;
console.log(cube(3))