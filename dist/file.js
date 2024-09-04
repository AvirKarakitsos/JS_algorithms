import Algo from "./algo.js";
export default class File extends Algo {
    add(item) {
        this.table.unshift(item);
    }
    delete() {
        if (!this.isEmpty())
            return this.table.shift();
        else
            return "La File est vide";
    }
    firstElement() {
        if (!this.isEmpty())
            return this.table[0];
        else
            "La Pile est vide";
    }
}
