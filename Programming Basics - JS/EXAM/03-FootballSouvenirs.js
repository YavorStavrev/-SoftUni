function FootballSouvenirs(input) {
    let team = input[0];
    let souvenir = input[1];
    let numberOfSouvenirs = Number(input[2]);
    let totalSum = 0;
    if(team !== 'Argentina' && team !== 'Brazil' && team !== 'Croatia' && team !== 'Denmark'){
        console.log('Invalid country!');
        return;
    }
    if(souvenir !== 'flags' && souvenir !== 'caps' && souvenir !== 'posters' && souvenir !== 'stickers'){
        console.log('Invalid stock!');
        return;
    }
    switch (team) {
        case 'Argentina':
            if (souvenir === 'flags') {
                totalSum += numberOfSouvenirs * 3.25;
            } else if (souvenir === 'caps') {
                totalSum += numberOfSouvenirs * 7.2;
            } else if (souvenir === 'posters') {
                totalSum += numberOfSouvenirs * 5.1;
            } else if (souvenir === 'stickers'){
                totalSum += numberOfSouvenirs * 1.25;
            }
            console.log(`Pepi bought ${numberOfSouvenirs} ${souvenir} of ${team} for ${totalSum.toFixed(2)} lv.`);
            break;
        case 'Brazil':
            if (souvenir === 'flags') {
                totalSum += numberOfSouvenirs * 4.2;
            } else if (souvenir === 'caps') {
                totalSum += numberOfSouvenirs * 8.5;
            } else if (souvenir === 'posters') {
                totalSum += numberOfSouvenirs * 5.35;
            } else if (souvenir === 'stickers'){
                totalSum += numberOfSouvenirs * 1.20;
            }
            console.log(`Pepi bought ${numberOfSouvenirs} ${souvenir} of ${team} for ${totalSum.toFixed(2)} lv.`);
            break;
        case 'Croatia':
            if (souvenir === 'flags') {
                totalSum += numberOfSouvenirs * 2.75;
            } else if (souvenir === 'caps') {
                totalSum += numberOfSouvenirs * 6.9;
            } else if (souvenir === 'posters') {
                totalSum += numberOfSouvenirs * 4.95;
            } else if (souvenir === 'stickers'){
                totalSum += numberOfSouvenirs * 1.1;
            }
            console.log(`Pepi bought ${numberOfSouvenirs} ${souvenir} of ${team} for ${totalSum.toFixed(2)} lv.`);
            break;
        case 'Denmark':
            if (souvenir === 'flags') {
                totalSum += numberOfSouvenirs * 3.1;
            } else if (souvenir === 'caps') {
                totalSum += numberOfSouvenirs * 6.5;
            } else if (souvenir === 'posters') {
                totalSum += numberOfSouvenirs * 4.8;
            } else if (souvenir === 'stickers'){
                totalSum += numberOfSouvenirs * 0.9;
            }
            console.log(`Pepi bought ${numberOfSouvenirs} ${souvenir} of ${team} for ${totalSum.toFixed(2)} lv.`);
            break;
    }
    if(team !== 'Argentina' && team !== 'Brazil' && team !== 'Croatia' && team !== 'Denmark'){
        console.log('Invalid country!');
        return;
    }
    if(souvenir !== 'flags' && souvenir !== 'caps' && souvenir !== 'posters' && souvenir !== 'stickers'){
        console.log('Invalid stock!');
        return;
    }

}
FootballSouvenirs(['Brazil', 'stickers', '5']);