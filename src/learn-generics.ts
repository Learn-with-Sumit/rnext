// <T>, <V>, <K>, <S>, <E>

// <T, V>

function greetings<T, V>(param1: T, param2: V): void {
    console.log(`Hello ${param1}. Type of ${param1} is ${typeof param1} || Hello ${param2}. Type of ${param2} is ${typeof param2}`);
}

greetings(1234, 'Tapas');

interface GenericInterface<T> {
    value: T;
}

class MyClass implements GenericInterface<string> {
    value: string = "Hello";
}

class MyClass1 implements GenericInterface<number> {
    value: number = 1234;
}

class GenericClass<T, V> {
    value: T;
    item: V

    constructor(value: T, item: V) {
        this.value = value;
        this.item = item;
    }
}

const myValue = new GenericClass(1234, {})
