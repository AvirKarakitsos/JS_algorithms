export default class Algo<T> {
    public table: T[];

    constructor() {
        this.table = [];
    }

    size(): number {
        return this.table.length;
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    linearSearch(item: T): boolean {
        for (let i = 0; i < this.size(); i++) {
            if (this.table[i] === item) return true;
        }
        return false;
    }

    binarySearch(item: T): boolean {
        let left = 1;
        let right = this.size();

        while (Math.abs(right - left) !== 1) {
            let divided = Math.floor((left + right) / 2);

            if (item === this.table[divided - 1]) return true;
            else if (item < this.table[divided - 1]) right = divided;
            else left = divided;
        }

        if (item === this.table[left - 1] || item === this.table[right - 1])
            return true;
        else return false;
    }

    jumpSearch(item: T) {
        let jump = 3;
        let i = 1;

        while (item <= this.table[i * jump - 1]) {
            i++;

            if (i * jump > this.size()) {
                if (item <= this.table[this.size() - 1]) {
                    for (let k = (i - 1) * jump - 1; k < this.size(); i++) {
                        if (this.table[k] === item) return true;
                    }
                    return false;
                } else return false;
            }
        }

        for (let k = (i - 1) * jump - 1; k <= i * jump - 1; i++) {
            if (this.table[i] === item) return true;
        }
        return false;
    }

    clear(): void {
        this.table = [];
    }
}
