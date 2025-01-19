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

    clear(): void {
        this.table = [];
    }

    //Search Algorithms
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
        let jump = 5;
        let i = 1;

        while (item > this.table[i * jump]) {
            console.log('loop while: ' + i);
            i++;

            if (i * jump > this.size()) {
                if (item <= this.table[this.size() - 1]) {
                    for (let k = (i - 1) * jump; k < this.size(); k++) {
                        if (item > this.table[k]) return false;
                        else if (item === this.table[k]) return true;
                    }
                } else return false;
            }
        }

        for (let k = (i - 1) * jump; k <= i * jump; k++) {
            console.log('loop for: ' + k);
            if (item > this.table[k]) return false;
            else if (item === this.table[k]) return true;
        }
    }

    //Sort Algorithms

    insertionSort() {
        // Parcourir le tableau à partir du deuxième élément
        for (let i = 1; i < this.table.length; i++) {
            let key = this.table[i]; // L'élément à insérer
            let j = i - 1;

            // Déplacer les éléments de la partie triée qui sont plus grands que "key" vers la droite
            while (j >= 0 && this.table[j] > key) {
                this.table[j + 1] = this.table[j];
                j--;
            }

            // Insérer l'élément "key" à sa position correcte
            this.table[j + 1] = key;
        }

        return this.table; // Retourner le tableau trié
    }
}
