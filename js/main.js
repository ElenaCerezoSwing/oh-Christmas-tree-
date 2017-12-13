'use strict';


var treeHeight = parseInt(prompt('¿cuántos pisos tendrá tu árbol de Navidad?'));
var treeDraw = '▲';
var counter = '';


for (var i = 0 ; i < treeHeight; i++) {
for (var j = 0; j <= i; j++) {
  counter = counter + treeDraw;
}
counter = counter + '\n';
}

alert(counter);
