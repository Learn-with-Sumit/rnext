type Address = string;

type StringOrNumber = string | number;

type Movies = 'Horror' | 'Comedy' | 'Romantic';

interface A {
    name: string;
}

interface B {
    age: number;
}

type AB = A | B;
