function SuppliesforSchool(input) {
    let himikali = Number(input[0]);
    let markeri = Number(input[1]);
    let preparat = Number(input[2]);
    let procent = Number(input[3]) / 100;
    let sum = (himikali * 5.80) + (markeri * 7.20) + (preparat * 1.20);
    let namalenasuma = sum - (procent * sum);
    console.log(namalenasuma);
}
SuppliesforSchool(["20", "25", "40", "5"]);