function Repainting(input) {
    let nailon = Number(input[0]);
    let boq = Number(input[1]);
    let razreditel = Number(input[2]);
    let chasove = Number(input[3]);

    let dobavenaboq = 0.1 * boq;
    let totalboq = boq + dobavenaboq;
    let totalboqprice = totalboq * 14.50;

    let totalnailon = nailon + 2;
    let totalnailonprice = totalnailon * 1.50;
    
    let razreditelprice = razreditel * 5;
    let materialsum = totalboqprice + totalnailonprice + razreditelprice + 0.4;

    let sumazaedinchas = 0.3 * materialsum;
    let totalmaistorsum = sumazaedinchas * chasove;

    console.log(totalmaistorsum + materialsum);
}
