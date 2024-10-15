function vacationBooklist(input) {
    let curBookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let totalHours = curBookPages / pagesPerHour;
    let hoursPerDay = totalHours / days;
    console.log(hoursPerDay);
}
vacationBooklist(["220", "18", "3"]);
