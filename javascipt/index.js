/*
function sayHello(name, age){
  return `Hello ${name} you are ${age} years old`;
}

  const greetNicolas = sayHello("Nicolas", 14)
  console.log(greetNicolas)
*/

const calculator0 = {
  plus: function(a, b){
    return a + b;
  }
}
const calculator1 = {
  minus: function(a, b){
    return a - b;
  }
}
const calculator2 = {
  komsem: function(a ,b){
    return a * b;
  }
}
const calculator3 = {
  nanugi: function(a, b){
    return a / b;
  }
}

const plus = calculator0.plus(5, 5)
const minus = calculator1.minus(5, 5)
const komsem = calculator2.komsem(5, 5)
const nanugi =  calculator3.nanugi(5, 5)
console.log(plus , minus, komsem, nanugi);
