function Vacation(number, type, day){
    let sum = 0;
    if(number >= 100 && type === "Business"){
        number -= 10; 
    }
    switch(type){
        case "Students":
            switch(day){
                case "Friday":
                    sum = 8.45 * number;
                    break;
                case "Saturday":
                    sum = 9.8 * number;
                    break;
                case "Sunday":
                    sum = 10.46 * number;
                    break;
                    
            }
            break;
        case "Business":
            switch(day){
                
                case "Friday":
                    sum = 10.9 * number;
                    break;
                case "Saturday":
                    sum = 15.6 * number;
                    break;
                case "Sunday":
                    sum = 16 * number;
                    break;
               
            }
            break;
        case "Regular":
            switch(day){
                case "Friday":
                    sum = 15 * number;
                    break;
                case "Saturday":
                    sum = 20 * number;
                    break;
                case "Sunday":
                    sum = 22.5 * number;
                    break;
            }
            break;
    }
    if(number >= 30 && type === "Students"){
        sum = sum - 0.15 * sum;
    }
    if(number >= 10 && number <= 20){
        sum = sum - 0.05 * sum;
    }
    console.log(`Total price: ${sum.toFixed(2)}`);
}
Vacation(40,

    "Regular",
    
    "Saturday");