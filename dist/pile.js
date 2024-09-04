class Pile {
    constructor() {
        this.table = [];
    }
    add(item) {
        this.table.push(item);
    }
    delete() {
        if (!this.isEmpty())
            return this.table.pop();
        else
            return "La Pile est vide";
    }
    lastElement() {
        if (!this.isEmpty())
            return this.table[this.size() - 1];
        else
            "La Pile est vide";
    }

    size() {
        return this.table.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    contain(item) {
        for (let i = 0; i < this.size(); i++) {
            if (this.table[i] === item)
                return true;
        }
        return false;
    }
    
    clear() {
        this.table = [];
    }
}
const test = new Pile();
