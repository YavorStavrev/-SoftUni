function bossRush(input){
    let pattern = /^\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+\s[A-Za-z]+)#\s*$/gm;
    let bossCounter = Number(input.shift());
    

    for(let i = 0; i < bossCounter; i++){
        let token = input[i];
        let exec = pattern.exec(token);
        if(exec){
            let boss = exec.groups.boss;
            let title = exec.groups.title;
            console.log(`${boss}, The ${title}`);
            console.log(`>> Strength: ${boss.length}`);
            console.log(`>> Armor: ${title.length}`);
        }else{
            console.log('Access denied!');
        }
        pattern.lastIndex = 0;
    }
}
bossRush([
    '3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'
]);
