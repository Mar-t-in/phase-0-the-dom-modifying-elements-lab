// Write your code here!
//removing #main
const main = document.querySelector('#main');
main.remove();

//
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Martin is the champion';