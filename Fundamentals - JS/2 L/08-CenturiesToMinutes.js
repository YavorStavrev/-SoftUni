function CenturiesToMinutes(century){
    let years = century * 100;
    let days = Math.floor(years * 365.2422);
    let hours = days * 24;
    let min = hours * 60;
    console.log(`${century} centuries = ${years} years = ${days} days = ${hours} hours = ${min} minutes`);
}
CenturiesToMinutes(1);