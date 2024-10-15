function deckOfCards(input) {
    let list = input.shift().split(', ');
    let numOfCommands = Number(input.shift());
    let command = input.shift();
    while (numOfCommands > 0) {
        let [operator, index, cardName] = command.split(', ');
        switch (operator) {
            case 'Add':
                if (!list.includes(index)) {
                    list.push(index);
                    console.log("Card successfully added");
                } else {
                    console.log("Card is already in the deck");
                }
                break;
            case 'Remove':
                if (list.includes(index)) {
                    let indexOfCard = list.indexOf(index);
                    list.splice(indexOfCard, 1);
                    console.log("Card successfully removed");
                } else {
                    console.log("Card not found");
                }
                break;
            case 'Remove At':
                index = Number(index);
                if (index >= 0 && index < list.length) {
                    list.splice(index, 1);
                    console.log("Card successfully removed");
                } else {
                    console.log("Index out of range");
                }
                break;
            case 'Insert':
                index = Number(index);
                if (index >= 0 && index < list.length) {
                    if(list.includes(cardName)){
                        console.log("Card is already added");
                        break;
                    }
                    list.splice(index, 0, cardName);
                    console.log("Card successfully added");
                } else {
                    console.log("Index out of range");
                }
                break;
        }

        numOfCommands--;
        command = input.shift();
    }

    console.log(list.join(', '));
}
deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs",
"2",
"Insert, -1, Queen of Spades",
"Remove At, 1"])


;