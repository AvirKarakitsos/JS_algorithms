class Pile {
    constructor() {
        this.table = [];
    }
    add(item) {
        this.table.push(item);
    }
}
const test = new Pile();
test.add(15);
test.add(25);
console.log(test.table);
