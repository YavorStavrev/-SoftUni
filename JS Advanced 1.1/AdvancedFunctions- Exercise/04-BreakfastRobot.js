function breakfastChef() {
    const inventory = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    function manage(input) {
        const [command, item, quantity] = input.split(' ');

        if (command === 'restock') {
            inventory[item] += Number(quantity);
            return 'Success';
        }

        if (command === 'prepare') {
            const recipe = recipes[item];
            const qty = Number(quantity);

            for (const ingredient in recipe) {
                if (inventory[ingredient] < recipe[ingredient] * qty) {
                    return `Error: not enough ${ingredient} in stock`;
                }
            }

            for(const ingredient in recipe){
                inventory[ingredient] -= recipe[ingredient] * qty;
            }

            return 'Success';
        }

        if(command === 'report'){
             return `protein=${inventory.protein} carbohydrate=${inventory.carbohydrate} fat=${inventory.fat} flavour=${inventory.flavour}`;
        }
        return 'Invalid command';
    }

    return manage;
}


const manager = breakfastChef();
console.log(manager('prepare turkey 1')); // Error: not enough protein in stock
console.log(manager('restock protein 10')); // Success
console.log(manager('prepare turkey 1')); // Error: not enough carbohydrate in stock
console.log(manager('restock carbohydrate 10')); // Success
console.log(manager('prepare turkey 1')); // Error: not enough fat in stock
console.log(manager('restock fat 10')); // Success
console.log(manager('prepare turkey 1')); // Error: not enough flavour in stock
console.log(manager('restock flavour 10')); // Success
console.log(manager('prepare turkey 1')); // Success
console.log(manager('report')); 