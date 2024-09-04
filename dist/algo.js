export default class Algo {
    constructor() {
        this.table = [];
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
