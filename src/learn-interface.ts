interface Customer {
    name: string,
    address: string
}

const hm: Customer = {
    name: 'H&M',
    address: 'Hong Kong'
}

class GoldenChase implements Customer {
    name: string;
    address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}

const abcd = new GoldenChase('ABCD', 'Dhaka');

console.log(abcd.name);