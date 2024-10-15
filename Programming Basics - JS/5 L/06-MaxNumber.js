function MaxNumber(input) {
    let index = 0;
    let integer = input[index];
    let max = Number.MIN_SAFE_INTEGER;
    while (integer !== 'Stop') {
        let currentnumber = Number(integer);

        if (currentnumber > max) {
            max = currentnumber;
        }
        integer = input[index];
        index++;
    }
    console.log(max);
}
MaxNumber(['-1','-2','Stop']);
