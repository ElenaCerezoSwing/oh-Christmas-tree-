'use strict';


var treeHeight = parseInt(prompt('¿cuántos pisos tendrá tu árbol de Navidad?'));
var treeDraw = '▲';
var counter = '';
var star = '★';
var treeTrunk = '|';

counter = star + '\n';

for (var i = 0 ; i < treeHeight; i++) {
for (var j = 0; j <= i; j++) {
  counter = counter + treeDraw;
}
counter = counter + '\n';

}
counter = counter + treeTrunk;

alert(counter);
