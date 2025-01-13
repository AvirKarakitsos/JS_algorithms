import Pile from './pile.js';

let tab = new Pile();
tab.add(1);
tab.add(5);
tab.add(12);
tab.add(15);
tab.add(23);
tab.add(27);
tab.add(35);
tab.add(75);
tab.add(123);
tab.add(231);
tab.add(365);
tab.add(555);
tab.add(1000);
tab.add(1456);
console.log(tab.table);

let result = tab.binarySearch(1456);
console.log(result);
