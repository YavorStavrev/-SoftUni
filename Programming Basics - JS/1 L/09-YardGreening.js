function YardGreening(input) {
    let km2 = input[0];
    let firstprice = km2 * 7.61;
    let finalprice = firstprice - [(18 * firstprice)/100];
    let discount = firstprice - finalprice;
    console.log(`The final price is: ${finalprice} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);
    
}
YardGreening(["550"]);