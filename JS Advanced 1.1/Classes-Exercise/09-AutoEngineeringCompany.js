function autoEngineeringCompany(input) {
    let store = new Map();
    class CarCompany {
        constructor(brandName) {
            this.brandName = brandName;
            this.carStore = new Map();
        }

        addCar(carModel, qty) {
            if (!this.carStore.has(carModel)) {
                this.carStore.set(carModel, 0);
            }
            this.carStore.set(carModel, this.carStore.get(carModel) + qty);
        }

        toString() {
            let buff = this.brandName + '\n';
            for (let [carModel, carQty] of this.carStore) {
                buff += `###${carModel} -> ${carQty}\n`; 
            }
            return buff.trim();
        }
    }

    for (let el of input) {
        let [carBrand, carModel, producedCars] = el.split(' | ');
        producedCars = Number(producedCars);
        if (!store.has(carBrand)) {
            store.set(carBrand, new CarCompany(carBrand));
        }
        store.get(carBrand).addCar(carModel, producedCars);
    }

    for (let [carBrand, CarCompanyData] of store) {
        console.log(CarCompanyData.toString());
    }
}
autoEngineeringCompany(['Audi | Q7 | 1000',

    'Audi | Q6 | 100',

    'BMW | X5 | 1000',

    'BMW | X6 | 100',

    'Citroen | C4 | 123',

    'Volga | GAZ-24 | 1000000',

    'Lada | Niva | 1000000',

    'Lada | Jigula | 1000000',

    'Citroen | C4 | 22',

    'Citroen | C5 | 10']);