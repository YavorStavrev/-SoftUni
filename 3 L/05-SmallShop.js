function SmallShop(input){
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    let totalprice = 0;
    if(town === "Sofia"){
        switch(product){
            case "coffee":totalprice = quantity * 0.50;break;
            case "water":totalprice = quantity * 0.80;break;
            case "beer":totalprice = quantity * 1.20;break;
            case "sweets":totalprice = quantity * 1.45;break;
            case "peanuts":totalprice = quantity * 1.60;break;
        }
    }else if(town === "Plovdiv"){
        switch(product){
            case "coffee":totalprice = quantity * 0.40;break;
            case "water":totalprice = quantity * 0.70;break;
            case "beer":totalprice = quantity * 1.15;break;
            case "sweets":totalprice = quantity * 1.30;break;
            case "peanuts":totalprice = quantity * 1.50;break;
        }
    }else if(town === "Varna"){
        switch(product){
            case "coffee":totalprice = quantity * 0.45;break;
            case "water":totalprice = quantity * 0.70;break;
            case "beer":totalprice = quantity * 1.10;break;
            case "sweets":totalprice = quantity * 1.35;break;
            case "peanuts":totalprice = quantity * 1.55;break;
        }
    }
    console.log(totalprice);
}
SmallShop(["coffee", "Varna", "2"]);