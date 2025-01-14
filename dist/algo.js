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
    linearSearch(item) {
        for (let i = 0; i < this.size(); i++) {
            if (this.table[i] === item)
                return true;
        }
        return false;
    }
    binarySearch(item) {
        let left = 1;
        let right = this.size();
        while (Math.abs(right - left) !== 1) {
            let divided = Math.floor((left + right) / 2);
            if (item === this.table[divided - 1])
                return true;
            else if (item < this.table[divided - 1])
                right = divided;
            else
                left = divided;
        }
        if (item === this.table[left - 1] || item === this.table[right - 1])
            return true;
        else
            return false;
    }
    jumpSearch(item) {
        let jump = 5;
        let i = 1;
        while (item > this.table[i * jump]) {
            console.log('loop while: ' + i);
            i++;
            if (i * jump > this.size()) {
                if (item <= this.table[this.size() - 1]) {
                    for (let k = (i - 1) * jump; k < this.size(); k++) {
                        if (this.table[k] === item && item <= this.table[k])
                            return true;
                    }
                    return false;
                }
                else
                    return false;
            }
        }
        for (let k = (i - 1) * jump; k <= i * jump; k++) {
            console.log('loop for: ' + k);
            if (this.table[k] === item && item <= this.table[k]) {
                return true;
            }
        }
        return false;
    }
    clear() {
        this.table = [];
    }
}
