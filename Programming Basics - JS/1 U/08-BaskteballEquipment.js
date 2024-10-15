function Basketball(input) { 
    let yeartax = Number(input[0]);
    let kecove = yeartax - (yeartax * 0.4);
    let ekip = kecove - (kecove * 0.2);
    let topka = ekip / 4;
    let aksesoari = topka / 5;
    console.log(yeartax + kecove + ekip + topka + aksesoari);
}
Basketball(["355"]);