class Pile {
    table: Array<string | number>

    constructor(){
        this.table = [];
    }

    add(item) {
        this.table.push(item)
    }

    delete() {
        if(!this.isEmpty()) return this.table.pop()
        else return "La Pile est vide"
    }

    peek() {
        if(!this.isEmpty()) return this.table[ this.size() - 1]
        else "La Pile est vide"
    }

    size() {
        return this.table.length
    }

    isEmpty() {
        return this.size() === 0
    }
}

const test = new Pile()

test.add(15)
test.add(25)
test.add(125)
test.add(5)
test.add(255)

console.log(test.peek())

let res = test.delete()
console.log(test.isEmpty())