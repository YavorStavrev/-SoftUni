function HotelRoom(input){
    let month = input[0];
    let nights = Number(input[1]);
    let apartmentprice = 0;
    let studioprice = 0;
    switch(month){
        case 'May':
        case 'October':
            studioprice = nights * 50;
            apartmentprice = nights * 65;
            break;
        case 'June':
        case 'September':
            studioprice = nights * 75.2;
            apartmentprice = nights * 68.7;
            break;
        case 'July':
        case 'August':
            studioprice = nights * 76;
            apartmentprice = nights * 77;
            break;
    }
    if(nights > 7 && month === 'May' || month === 'October'){
        studioprice = studioprice - (0.05 * studioprice);
    }else if(nights > 14 && month === 'May' || month === 'October'){
        studioprice = studioprice - (0.3 * studioprice);
    }else if(nights > 14 && month === 'June' || month === 'September'){
       studioprice = studioprice - (0.2 * studioprice) ;
    }
    if(nights > 14){
        apartmentprice = apartmentprice - (0.1 * apartmentprice);
    }
    console.log(`Apartment: ${apartmentprice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioprice.toFixed(2)} lv.`);
}
HotelRoom(['May','15']);
