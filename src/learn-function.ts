function sum(a: number, b?: number): number {
    if (b) {
        return a + b;
    }
    return a;
}

sum(2,5);
sum(3);
sum(4, 1)