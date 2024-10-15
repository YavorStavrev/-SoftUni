function Cinema(input){
    let projekciq = input[0];
    let lines = Number(input[1]);
    let colums = Number(input[2]);
    let allseats = lines * colums;
    let totalprice = 0;
    switch(projekciq){
        case 'Premiere': totalprice = allseats * 12;break;
        case 'Normal': totalprice = allseats * 7.50;break;
        case 'Discount': totalprice = allseats * 5;break;
    }
    console.log(totalprice.toFixed(2));
}
Cinema(['Premiere', '10', '12']);
