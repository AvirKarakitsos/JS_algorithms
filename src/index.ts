import Pile from './pile.js';

let tab = new Pile();
tab.add(1);
tab.add(12);
tab.add(123);
tab.add(1456);
let result = tab.binarySearch(11, 1, 4);
console.log(result);
