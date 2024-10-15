function solve(data){
    let store = {};
    for(let el of data){
        let inputData = el.split(' : ');
        let key = inputData[0];
        let value = Number(inputData[1]);
        store[key] = value;
    }
    
    let sortArr = Object.entries(store).sort((arr1, arr2) => arr1[0].localeCompare(arr2[0]));
    let currentGroupChar = "";
    for(let el of sortArr){
        let key = el[0];
        let value = el[1];
        if(currentGroupChar !== key[0]){
            currentGroupChar = key[0];
            console.log(currentGroupChar);
        }
        console.log(`  ${key}: ${value}`);
    }
}
solve(['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10']);