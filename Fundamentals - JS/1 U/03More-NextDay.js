function NextDay(year, month, day){
    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: 
        if(day === 31){
            day = 1;
            month++;
        }
        if(month === 12 && day === 31){
            year++;
            month = 1;
            day = 1;
            break;
        }
        day++;
        break;
        case 2: 
        case 4:
        case 6:
        case 9:
        case 11:
            if(day === 30){
                day = 1;
                month++;
                break;
            }
            day++;
            break;
    }
    console.log(`${year}-${month}-${day}`);
}
NextDay(1,1,1);