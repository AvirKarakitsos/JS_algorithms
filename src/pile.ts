class Pile<T> {
    public table: Array<T>

    constructor(){
        this.table = [];
    }

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

    size(): number {
        return this.table.length
    }

    isEmpty(): boolean {
        return this.size() === 0
    }

    contain(item: T): boolean {
        for(let i=0; i< this.size(); i++) {
            if(this.table[i] === item) return true 
        }
        return false
    }

    clear() {
        this.table = []
    }
}

const test = new Pile()
