function theImitationGame(input) {
    let arr = input.slice(0);
    let message = arr.shift();
    let currLine = arr.shift();

    while (currLine !== 'Decode') {
        let tokens = currLine.split('|');
        let command = tokens[0];
        let tempMessage = '';
        if (command === 'Move') {

            let numOfLetters = Number(tokens[1]);
            let lettersToMove = message.substring(0, numOfLetters);
            tempMessage = message.replace(lettersToMove, '');
            tempMessage += lettersToMove;
            message = tempMessage;
        } else if (command === 'Insert') {

            let index = Number(tokens[1]);
            let value = tokens[2];

            tempMessage = message.split('');
            tempMessage.splice(index, 0, value);
            message = tempMessage.join('');

        } else if (command === 'ChangeAll') {
            let substring = tokens[1];
            let replacement = tokens[2];

            while (message.includes(substring)) {
                tempMessage = message.replace(substring, replacement);
                message = tempMessage;
            }

        }
        currLine = arr.shift();
    }



    console.log(`The decrypted message is: ${message}`);
}
theImitationGame([

    'zzHe',

    'ChangeAll|z|l',

    'Insert|2|o',

    'Move|3',

    'Decode'
]);