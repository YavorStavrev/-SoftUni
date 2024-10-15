function ticketStation(arrOfData, sortCriteria) {
    const ticketList = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        static sort(arr, sortCriteria) {
            return arr.sort((a, b) => {
                return sortCriteria === 'price'?
                    a[sortCriteria] - b[sortCriteria] :
                    a[sortCriteria].localeCompare(b[sortCriteria]);
            })
        }
    }
    for (let el of arrOfData) {
        let [destination, price, status] = el.split('|');
        price = Number(price);
        const currentTicket = new Ticket(destination, price, status);
        ticketList.push(currentTicket);
    }
    return Ticket.sort(ticketList, sortCriteria);
}

const result = ticketStation(['Philadelphia|94.20|available',

    'New York City|95.99|available',

    'New York City|95.99|sold',

    'Boston|126.20|departed'],

    'destination');
console.log(result);
