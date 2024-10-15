function LunchBreak(input){
    let serial = input[0];
    let epizod = Number(input[1]);
    let pochivka = Number(input[2]);
    let obqd = (1 / 8) * pochivka;
    let otdih = (1 / 4) * pochivka;
    let vremezaserial = pochivka - otdih - obqd;
    if(epizod <= vremezaserial){
        let lefttime = vremezaserial - epizod;
        console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(lefttime)} minutes free time.`);
    }else if(epizod > vremezaserial){
        let neededtime = epizod - vremezaserial;
        console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(neededtime)} more minutes.`);
    }
}
LunchBreak(["TWD", "70", "65"]);
