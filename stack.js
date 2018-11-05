class Stack {
    constructor() {
        this.dataStore = [];
    }
    push(elementData) {
        this.dataStore.push(elementData);
    }
    peek() {
        return this.dataStore[this.dataStore.length-1];
    }
    pop() {
        return this.dataStore.pop();
    }
    size() {
        return this.dataStore.length;
    }
}