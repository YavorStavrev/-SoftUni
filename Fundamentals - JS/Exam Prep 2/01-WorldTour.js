function worldTour(input){
    let message = input.shift();
    let currLine = input.shift();
    while(currLine !== 'Travel'){

        let tokens = currLine.split(':');
        let command = tokens[0];
        let tempMessage = '';
        if(command === 'Add Stop'){
            let index = Number(tokens[1]);
            let string = tokens[2];
            if(message.length > index && index >= 0){
                tempMessage = message.split('');
                tempMessage.splice(index,0,string)
                message = tempMessage.join('');
                
            }
        }
        if(command === 'Remove Stop'){
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            if(message.length > startIndex && startIndex >= 0){
                tempMessage = message.split('');
                tempMessage.splice(startIndex,endIndex - startIndex + 1);
                message = tempMessage.join('');
                
            }
        }else{
            let oldString = tokens[1];
            let newString = tokens[2];
            if(message.includes(oldString)){
               tempMessage = message.replace(oldString,newString);
               message = tempMessage;
               
            }
         }
         console.log(message);
        currLine = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${message}`);
    
}
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",

"Add Stop:3:Nigeria",

"Remove Stop:4:8",

"Switch:Albania: Azərbaycan",

"Travel"]);