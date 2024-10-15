function Zoo(input) {
    let dog = Number(input[0]);
    let cat = Number(input[1]);
    let price =(dog * 2.50) + (cat * 4);
    console.log(price);
}
Zoo(["5", "6"]);