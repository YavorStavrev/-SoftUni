function MinNumber(input) {
    let index = 0;
    let number = input[index];
    let min = Number.MAX_SAFE_INTEGER;
    while (number !== 'Stop') {
        let currentnumber = number;
        if (currentnumber < min) {
            min = Number(currentnumber);
        }
        number = input[index];
        index++;
    }
    console.log(min);
}
MinNumber(["100",

    "99",

    "80",

    "70",

    "Stop"]);