function getFibonator() {
    let a = 0, b = 1;
    
    return function() {
        let next = a + b;
        a = b;
        b = next;
        return a;
    };
}


let fib = getFibonator();

console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
