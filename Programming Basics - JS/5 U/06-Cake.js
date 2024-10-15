function Cake(input) {
    let height = Number(input[0]);
    let width = Number(input[1]);
    let pieces = height * width;
    let index = 2;
    let command = input[index];
    index++;
    while (command !== 'STOP'){
        let eaten = command;
        pieces -= eaten; 
        if(pieces < 0){
            console.log(`No more cake left! You need ${-(pieces)} pieces more.`);
            break;
        }
        
        command = input[index];
        index++;
    }
    if(command === 'STOP'){
        console.log(`${pieces} pieces are left.`);
    }
}
Cake(["10",

"10",

"20",

"20","20", "20", "21"]);
