function fruit(str, grams, pricePerKilo){
    let weight = grams / 1000;
    let money = pricePerKilo * weight;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${str}.`);
}
fruit('orange', 2500, 1.80);