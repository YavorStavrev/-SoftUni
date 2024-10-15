function solve(input) {
    let obj = {}
    input.forEach(element => {
        let [townName, productName, productPrice] = element.split(' | ');
        productPrice = Number(productPrice);
        if (!obj[productName]) {
            obj[productName] = { price: productPrice, town: townName };
        } else {
            if (productPrice < obj[productName].price) {
                obj[productName].price = productPrice;
                obj[productName].town = townName;
            }
        }
    });
    for (let product in obj){
        console.log(`${product} -> ${obj[product].price} (${obj[product].town})`);
    }
}
solve(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10']);