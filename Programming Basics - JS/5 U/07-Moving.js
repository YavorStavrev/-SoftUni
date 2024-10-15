function Moving(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let freeSpace = width * length * height;
    let index = 3;
    let command = input[index];
    index++;
    while (command !== 'Done'){
        let numberOfBoxes = Number(command);
        freeSpace -= numberOfBoxes;
        if(freeSpace < 0){
            
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }
        command = input[index];
        index++;
    }
    if(command === 'Done'){
        console.log(`${freeSpace} Cubic meters left.`);
    }
}
Moving(["10",

"1",

"2",

"4",

"6",

"Done"]);
