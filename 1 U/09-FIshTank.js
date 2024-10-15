function FishTank(input) {
    let dyljina = Number(input[0]);
    let shirochina = Number(input[1]);
    let visochina = Number(input[2]);
    let procent = Number(input[3]);
    let obem = dyljina * shirochina * visochina;
    let obemlitri = obem * 0.001;
    let zaeto = procent / 100;
    let sum = obemlitri * (1 - zaeto);
    console.log(sum);

}
FishTank(["50", "50", "50", "50"]);
