function ReadText(input){
    let index = 0;
    let currentword = input[index];
    while(currentword != "Stop"){
        console.log(currentword);
        index++;
        currentword = input[index];
    }

}
ReadText(["Nakov",

"SoftUni",

"Sofia",

"Bulgaria",

"SomeText",

"Stop",

"AfterStop",

"Europe",

"HelloWorld"]);