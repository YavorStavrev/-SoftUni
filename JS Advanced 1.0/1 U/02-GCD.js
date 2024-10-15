function gcd(num1, num2) {
    let GCD = num1 % num2;
    while (GCD !== 0) {
        num1 = num2;
        num2 = GCD;
        GCD = num1 % num2;
    }
    console.log(num2);
}
gcd(15, 5);