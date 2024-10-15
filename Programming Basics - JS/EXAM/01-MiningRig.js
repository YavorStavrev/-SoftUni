function MiningRig(input){
    let cenaEdnaVideoKarta = Number(input[0]);
    let cenaEdinPrehodnik = Number(input[1]);
    let tokNaDen = Number(input[2]);
    let pechalbaNaDen = Number(input[3]);

    let cenaVideoKarta = cenaEdnaVideoKarta * 13;
    let cenaPrehodnik = cenaEdinPrehodnik * 13;
    let obshtoPoharcheniPari = cenaVideoKarta + cenaPrehodnik + 1000;
    let totalPechalbaNaDen = pechalbaNaDen - tokNaDen;
    let totalPechalbaNaDenKarti = totalPechalbaNaDen * 13;
    let dniteZaVryshtane = obshtoPoharcheniPari / totalPechalbaNaDenKarti;
    console.log(obshtoPoharcheniPari);
    console.log(Math.ceil(dniteZaVryshtane));
}
MiningRig(['700','15','0.2','2']);