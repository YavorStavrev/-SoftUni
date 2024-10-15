function dungeonestDark(arr) {
    let roomInfo = arr.shift();
    let rooms = roomInfo.split('|');
    let health = 100;
    let coins = 0;
    let roomReached = 0;
    for (let room of rooms) {  
        let tokens = room.split(' ');
        let command = tokens[0];
        let num = Number(tokens[1]);
        roomReached++;
        if (command === 'potion') {
            let healthHealed = num;
            if (health + healthHealed > 100) {
                healthHealed = 100 - health;
            }
            health += healthHealed;
            console.log(`You healed for ${healthHealed} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            coins += num;
            console.log(`You found ${num} coins.`);
        } else {
            health -= num;
            if(health > 0){
                console.log(`You slayed ${command}.`);
            }else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomReached}`);
                return;
            }
        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);