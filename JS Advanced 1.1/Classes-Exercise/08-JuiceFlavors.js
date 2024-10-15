function juiceFlavors(input) {
    let store = new Map();
    let storeBottle = new Map();

    for (let el of input) {
        let [type, qty] = el.split(' => ');
        qty = Number(qty);
        if (!store.has(type)) {
            store.set(type, 0);
        }
        store.set(type, store.get(type) + qty);

        if (store.get(type) >= 1000) {
            let bottle = parseInt(store.get(type) / 1000);
            if (!storeBottle.has(type)) {
                storeBottle.set(type, 0);
            }
            storeBottle.set(type, storeBottle.get(type) + bottle);
            store.set(type, store.get(type) - bottle * 1000);

        }
    }

    for (let [k, v] of storeBottle) {
        console.log(`${k} => ${v}`);
    }

}
juiceFlavors(['Orange => 2000',

    'Peach => 1432',

    'Banana => 450',

    'Peach => 600',

    'Strawberry => 549']);