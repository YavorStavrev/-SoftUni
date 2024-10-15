function tseamAccount(arr){
    let listOfGames = arr.shift().split(' ');
    let command = arr.shift();
    while(command !== 'Play!'){
        let [operator, game] = command.split(' ');
        switch(operator){
            case 'Install':
                if(!listOfGames.includes(game)){
                    listOfGames.push(game);
                }
                break;
            case 'Uninstall':
                if(listOfGames.includes(game)){
                    let indexOfGame = listOfGames.indexOf(game);
                    listOfGames.splice(indexOfGame,1);
                }
                break;
            case 'Update':
                if(listOfGames.includes(game)){
                    let indexOfGame = listOfGames.indexOf(game);
                    listOfGames.splice(indexOfGame,1);
                    listOfGames.push(game);
                }
                break;
            case 'Expansion':
               let arrGame = game.split('-');
                let originalGame = arrGame[0];
                let expansion = arrGame[1];
                if(listOfGames.includes(originalGame)){
                    let indexOfGame = listOfGames.indexOf(originalGame);
                    listOfGames.splice(indexOfGame + 1,0,`${originalGame}:${expansion}`);
                }
                break;
        }
        command = arr.shift();
    }
    console.log(listOfGames.join(' '));
}
tseamAccount(['CS WoW Diablo',

'Install LoL',

'Uninstall WoW',

'Update Diablo',

'Expansion CS-Go',

'Play!']);