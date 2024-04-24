
type MyNumber = number;

const socks: MyNumber = 10;

type Employee = {
    id: number;
    name: string;
    email: string;
    salary: number;
    address?: string;
}

const tapas: Employee = {
    id: 123,
    name: 'Tapas A',
    email: 'ataps@gmail.com',
    salary: 10
}

type Department = {
    name: string;
    employees: Employee[];
}

const sales: Department = {
    name: 'Sales',
    employees: [tapas]
}

type ISBN = number | string;

const book_a_isbn: ISBN = 1223434;

const book_b_isbn: ISBN = '1223434';

type Book = {
    title: string;
    pages: number;
    isbn: ISBN
}

type Writer = {
    name: string;
    age: number;
    address: string;
}

type BookWriter = Book & Writer;

const bookAndWriter: BookWriter = {
    title: "Learning JavaScript Book",
    pages: 123,
    isbn: 157453,
    name: "Tapas Adhikary",
    age: 40,
    address: "Bangalore"
}

type startsWithLWS = `LWS${string}`;

const sumitSaha: startsWithLWS = 'LWS-Sumit Saha';
