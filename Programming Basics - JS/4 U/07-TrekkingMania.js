function TrekkingMania(input) {
    let groups = Number(input[0]);
    let totalpeople = 0;
    let g1 = 0;
    let g2 = 0;
    let g3 = 0;
    let g4 = 0;
    let g5 = 0;
    for (let i = 1; i <= groups; i++) {
        let numbersOfGroup;
        numbersOfGroup = Number(input[i]);
        totalpeople += numbersOfGroup;
        if (numbersOfGroup <= 5) {
            g1 += numbersOfGroup;
        } else if (numbersOfGroup <= 12) {
            g2 += numbersOfGroup;
        } else if (numbersOfGroup <= 25) {
            g3 += numbersOfGroup;
        } else if (numbersOfGroup <= 40) {
            g4 += numbersOfGroup;
        } else {
            g5 += numbersOfGroup;
        }
    }
    let p1 = (g1 / totalpeople) * 100;
    let p2 = (g2 / totalpeople) * 100;
    let p3 = (g3 / totalpeople) * 100;
    let p4 = (g4 / totalpeople) * 100;
    let p5 = (g5 / totalpeople) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}
TrekkingMania(["10",

"10",

"5",

"1",

"100",

"12", "26", "17", "37", "40", "78"]);
