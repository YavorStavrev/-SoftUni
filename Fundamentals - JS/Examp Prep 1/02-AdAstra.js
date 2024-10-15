function adAstra(input) {

    let pattern = /([\|#])(?<name>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cals>\d{1,10000})\1/gm;
    let exec = pattern.exec(input);
    let totalCals = 0;
    let productsStore = [];

    while (exec) {
        let name = exec.groups.name;
        let date = exec.groups.date;
        let cals = exec.groups.cals;

        totalCals += Number(cals);
        let currProductData = `Item: ${name}, Best before: ${date}, Nutrition: ${cals}`;

        productsStore.push(currProductData);
        exec = pattern.exec(input);
    }
    let days = totalCals / 2000;
    console.log(`You have food to last you for: ${Math.floor(days)} days!`);
    productsStore.forEach(data => console.log(data));
}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);