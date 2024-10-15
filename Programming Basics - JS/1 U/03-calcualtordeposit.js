function depositCalculator(input) {
    let DepositedSum = Number(input[0]);
    let depositetPeriod = Number(input[1]);
    let percent = Number(input[2]);
    let decimal = percent / 100;
    let sum = DepositedSum + depositetPeriod * ((DepositedSum + decimal) / 12);
    console.log(sum);
}
