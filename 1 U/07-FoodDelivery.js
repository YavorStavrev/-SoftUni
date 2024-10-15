function FoodDelivery(input) {
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let vegetarian = Number(input[2]);
    let foodprice = (chicken * 10.35) + (fish * 12.40) + (vegetarian * 8.15);
    let desertprice = 20 / 100;
    let desert = foodprice * desertprice;
    let delivery = 2.50;
    let sum = desert + delivery + foodprice;
    console.log(sum);

}
FoodDelivery(["10", "12", "7"]);
