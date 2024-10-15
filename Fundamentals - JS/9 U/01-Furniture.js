function furniture(arr) {
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/;
    let totalPrice = 0;
    console.log('Bought furniture:');
    for (let elem of arr) {
        if (elem === 'Purchase') {
            break;
        }
        if (pattern.test(elem)) {
            let product = pattern.exec(elem);
            console.log(product[1]);
            totalPrice += Number(product[2]) * Number(product[3]);
        }
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture(['>Invalid<<!4', '>Invalid<<!2', '>Invalid<<!5', 'Purchase']);