import Algo from './algo.js';

export default class Pile<T> extends Algo<T> {
    add(item: T | T[]): void {
        Array.isArray(item) ? this.table.push(...item) : this.table.push(item);
    }

    delete(): T | string {
        if (!this.isEmpty()) return this.table.pop();
        else return 'La Pile est vide';
    }

    lastElement(): T | string {
        if (!this.isEmpty()) return this.table[this.size() - 1];
        else 'La Pile est vide';
    }
}
