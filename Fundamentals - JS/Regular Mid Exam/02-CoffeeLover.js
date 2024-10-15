function coffeeLover(input) {
    let list = input.shift().split(' ');
    let numOfCommands = Number(input.shift());
    let command = input.shift();
    while (numOfCommands > 0) {
        let [operator, index, value] = command.split(' ');
        value = Number(value);
        switch (operator) {
            case 'Include':
                list.push(index);
                break;
            case 'Remove':
                if (value > list.length) {
                    break;
                }else if (index === 'first') {
                    list.splice(0, value);
                } else {
                    list.splice(list.length - value, value);
                }
                break;
            case 'Prefer':
                index = Number(index);
                if (index >= 0 && index < list.length && value >= 0 && value < list.length) {
                    let temp = list[index];
                    list[index] = list[value];
                    list[value] = temp;
                } else {
                    break;
                }
                break;
            case 'Reverse':
                list.reverse();
                break;
        }
        numOfCommands--;
        command = input.shift();
    }
    console.log('Coffees:');
    console.log(list.join(' '));
}
coffeeLover(['Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica', '3', 'Include OrdinaryCoffee',
    'Remove first 1',
    'Prefer 4 1'
]);