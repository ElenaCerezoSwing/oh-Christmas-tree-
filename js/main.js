'use strict';


var dogAge = parseInt(prompt('¿cuántos años tiene tu perro?'));
var humanAge = 0;

for (var i = 1 ; i <= dogAge; i++) {
  if (i === 1) {
humanAge = humanAge + 15;
  }
else if (i === 2) {
humanAge = humanAge + 9;
  }
else {
  humanAge = humanAge + 5;
}
};
alert('tu perro tiene ' + dogAge + ' años perrunos que equivalen a ' + humanAge + ' años humanos :)');
