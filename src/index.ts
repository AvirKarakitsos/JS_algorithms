import File from './file.js';
import Pile from './pile.js';

const file = new File();

file.add('arno');
file.add('andrea');
file.add('sophie');
file.add('kioss');

console.log(file.table);

file.delete();
console.log(file.table);

console.log(file.firstElement());
console.log(file);
let pile = new Pile();
