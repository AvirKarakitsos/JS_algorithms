import Algo from "./algo.ts";

class Pile<T> extends Algo<T>{
    //public table: Array<T>

    // constructor(){
    //     this.table = [];
    // }

    add(item: T):void {
        this.table.push(item)
    }

    delete(): (T | string) {
        if(!this.isEmpty()) return this.table.pop()
        else return "La Pile est vide"
    }

    lastElement():(T | string) {
        if(!this.isEmpty()) return this.table[ this.size() - 1]
        else "La Pile est vide"
    }
}

console.log("test à venir")

const test = new Pile()
test.add("arno")
test.add("kioss")
test.add("andrea")

console.log(test.table)
