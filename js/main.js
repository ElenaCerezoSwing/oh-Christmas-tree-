'use strict';


var dogAge = parseInt(prompt('¿cuántos años tiene tu perro?'));
var humanAge = 0;

if (dogAge === 1) {
humanAge += 15;
  }
else if (dogAge === 2) {
humanAge +=24;
  }
else {
  humanAge = (dogAge-2)*5 + 24;
}

alert('tu perro tiene ' + dogAge + ' años perrunos que equivalen a ' + humanAge + ' años humanos :)');
