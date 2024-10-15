class RefurbishedSmartphones {
    availableSmartphones = [];
    soldSmartphones = [];

    constructor(retailer, revenue = 0) {
        this.retailer = retailer;
        this.revenue = revenue;
    }

    addSmartphone(model, storage, price, condition) {
        if (!model) {
            throw new Error('Invalid smartphone!');
        }

        if (!Number.isInteger(storage) || storage < 0) {
            throw new Error('Invalid smartphone!');
        }

        if (price < 0) {
            throw new Error('Invalid smartphone!');
        }

        if (!condition) {
            throw new Error('Invalid smartphone!');
        }

        //create smartphone object
        const newSmartPhone = {
            model,
            storage,
            price,
            condition
        }

        //add to availabeleSmartphones
        this.availableSmartphones.push(newSmartPhone);

        //return message
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage) {

        //find smartphone by model
        const smartphone = this.availableSmartphones.find(phone => phone.model === model);

        //if not found throw error
        if (!smartphone) {
            throw new Error(`${model} was not found!`);
        }

        //if storage is more or equal than desiredStorage
        let currentPrice = smartphone.price;
        let insufficientStorage = desiredStorage - smartphone.storage;

        //check storage if less then desiredStorage with less then or equal to 128gb (-10% price)
        if (insufficientStorage > 0 && insufficientStorage <= 128) {
            currentPrice *= 0.9;
        }

        //check storage if less then desiredStorage with more then or equal to 128gb (-20% price)
        if (insufficientStorage > 128) {
            currentPrice *= 0.8;
        };

        //remove smartphone from available
        this.availableSmartphones = this.availableSmartphones.filter(phone => phone.model !== model);

        //add to sold smartphones
        this.soldSmartphones.push({
            model: smartphone.model,
            storage: smartphone.storage,
            price: currentPrice
        })

        //add sold price to the revenue
        this.revenue += currentPrice;

        //return message
        return `${model} was sold for ${currentPrice.toFixed(2)}$`;
    }

    upgradePhones() {
        let messages = ['Upgrade smartphones:'];

        //if no availabe smartphones throw error

        if (this.availableSmartphones.length === 0) {
            throw new Error("There are no available smartphones!");
        }

        this.availableSmartphones.forEach(phone => {
            //double the storage
            phone.storage *= 2;

            //add message
            messages.push(`${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`);
        })

        return messages.join('\n');
    }

    salesJournal(criteria) {
        const criterias = ['storage', 'model'];

        if (!criterias.includes(criteria)) {
            throw new Error('Invalid criteria!');
        }

        const sorters = {
            storage: (a, b) => b.storage - a.storage,
            model: (a, b) => a.model.localeCompare(b.model)
        };

        let messages = [
            `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`,
            `${this.soldSmartphones.length} smartphones sold:`,
        ]

        this.soldSmartphones
            .sort(sorters[criteria])
            .forEach(phone => {
                messages.push(`${phone.model} / ${phone.storage} GB / ${phone.price.toFixed(2)}$`);
            });

        return messages.join('\n');
    }
}
let retailer = new RefurbishedSmartphones('SecondLife Devices');

retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');

retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');

retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');

console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));

console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));

console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));