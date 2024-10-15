function shoppingList(input) {
    let list = input.shift().split('!');
    let command = input.shift();
    while (command !== 'Go Shopping!') {
        let [action, firstItem, secondItem] = command.split(' ');
        command = input.shift();
        switch (action) {
            case 'Urgent':
                if (!list.includes(firstItem)) {
                    list.unshift(firstItem);
                }
                break;
            case 'Unnecessary':
                let itemIndex = list.indexOf(firstItem);
                if (itemIndex !== -1) {
                    list.splice(itemIndex, 1);
                }
                break;
            case 'Correct':
                let updatedIndex = list.indexOf(firstItem);
                if (updatedIndex !== -1) {
                    list[updatedIndex] = secondItem;
                }
                break;
            case 'Rearrange':
                let removeIndex = list.indexOf(firstItem);
                if (removeIndex !== -1) {
                    let element = list[removeIndex];
                    list.splice(removeIndex, 1);
                    list.push(element);
                }
                break;
        }
    }
    console.log(list.join(', '));
}
shoppingList(["Tomatoes!Potatoes!Bread",

    "Unnecessary Milk",

    "Urgent Tomatoes",

    "Go Shopping!"]);