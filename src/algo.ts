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

    binarySearch(item) {
        let left = 1;
        let right = this.size();

        while (Math.abs(right - left) !== 1) {
            let divided = Math.floor((left + right) / 2);
            console.log('divided: ' + divided);

            if (item === this.table[divided - 1]) return true;
            else if (item < this.table[divided - 1]) right = divided;
            else left = divided;
        }
        console.log('ended algo');
        console.log('left value: ' + this.table[left - 1]);
        console.log('right value: ' + this.table[right - 1]);

        if (item === this.table[left - 1] || item === this.table[right - 1])
            return true;
        else return false;
    }

    clear() {
        this.table = [];
    }
}
