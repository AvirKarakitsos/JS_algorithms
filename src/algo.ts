export default class Algo<T> {
    public table: T[];

    constructor() {
        this.table = [];
    }

    size() {
        return this.table.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    linearSearch(item) {
        for (let i = 0; i < this.size(); i++) {
            if (this.table[i] === item) return true;
        }
        return false;
    }

    binarySearch(item, left, right) {
        if (Math.abs(right - left) === 1) {
            if (item === this.table[left] || item === this.table[right]) {
                return true;
            } else {
                return -1;
            }
        } else {
            let divided = Math.floor((left + right) / 2);

            if (item === this.table[divided]) {
                return true;
            } else if (item < this.table[divided]) {
                let newLeft = left;
                let newRight = divided;
                this.binarySearch(item, newLeft, newRight);
            } else {
                let newLeft = divided;
                let newRight = right;
                this.binarySearch(item, newLeft, newRight);
            }
        }
    }

    clear() {
        this.table = [];
    }
}
