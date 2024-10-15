function Shopping(input){
    let budget = Number(input[0]);
    let videokarti = Number(input[1]);
    let procesori = Number(input[2]);
    let ram = Number(input[3]);
    let pricevideocard = 250;
    let priceprocesor = 0.35 * (videokarti * pricevideocard);
    let priceram = 0.1 * (videokarti * pricevideocard);
    let totalprice = (videokarti * pricevideocard) + (procesori * priceprocesor) + (ram * priceram);
    if( videokarti > procesori){
        totalprice *= 0.85;
    }
     if(budget >= totalprice){
        let left = budget - totalprice;
        console.log(`You have ${left.toFixed(2)} leva left!`);
     }else if(budget < totalprice){
        let need = totalprice - budget;
        console.log(`Not enough money! You need ${need.toFixed(2)} leva more!`);
     }

}
Shopping(["10000", "40", "55", "33"]);
