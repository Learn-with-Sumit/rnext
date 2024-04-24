let count: number = 34;
let myName: string = "lws";
let address: string = `${myName} stays in BD`

let amIMad: boolean = false;

let x: any = true;

let multipleTypes: string | number = "tapas";
multipleTypes = 30;

if (typeof myName === "string") {
    console.log('yes it ia a string');
} else {
    console.log('nope');
}

class Car {
    name: string;
    constructor(input: string) {
        this.name = input;
    }
}

class Human {
    name: string;
    constructor(input: string) {
        this.name = input;
    }
}

let bmw = new Car('BMW Car');
if (bmw instanceof Car) {
    console.log('Yes');
} else {
    console.log('No');
}

let str: any = "I am a string created with any";
let index: number = (str as string).indexOf("a");
console.log(index)
let index1: number = (<string>str).indexOf("a");



