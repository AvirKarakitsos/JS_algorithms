import Algo from "./algo.js";
export default class Pile extends Algo {
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
}
