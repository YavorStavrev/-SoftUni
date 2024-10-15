function sameNumbers(num) {
    let numStr = num.toString();
    let length = numStr.length;
    let sum = 0;
    let identical = true;
    for (let i = 0; i < length - 1; i++) {
        if (numStr[i] !== numStr[i + 1]) {
            identical = false;
        }
    }
    for (let i = 0; i < length; i++) {
        sum += Number(numStr[i]);
    }
    console.log(identical);
    console.log(sum);
}
sameNumbers(2222222);