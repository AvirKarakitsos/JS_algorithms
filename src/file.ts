import Algo from "./algo.js";

export default class File<T> extends Algo<T> {

    add(item: T):void {
        this.table.unshift(item)
    }

    delete(): (T | string) {
        if(!this.isEmpty()) return this.table.shift()
        else return "La File est vide"
    }

    firstElement():(T | string) {
        if(!this.isEmpty()) return this.table[0]
        else "La Pile est vide"
    }
}