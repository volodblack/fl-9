class Store {
    constructor(pizzaSlicePrice, weekendDiscount, nightDiscount, bonus) {
        this.pizzaSlicePrice = pizzaSlicePrice || 100;
        this.weekendDiscount = weekendDiscount || 0;
        this.nightDiscount = nightDiscount || 0;
        this.bonus = bonus || 0; 
    }

    buyPizzaSlice() {
        return `Price after discount is ${this.totalPrice()} and you have ${this.bonus} bonuses`;
    }

    totalPrice() {
        return this.pizzaSlicePrice - this.nightDiscount - this.weekendDiscount; 
    }
}

const getDiscount = store => {
    let date = new Date();
    let getHours = date.getHours();
    let getDay = date.getDay();
    if (getHours < 6 || getHours === 23) {
        store.nightDiscount = 15;
    }
    if (getDay === 6 || getDay === 0) {
        store.weekendDiscount = 10;
    }
    store.totalPrice(); 
};

const setBonus = store => {
    store.bonus += Math.floor(store.totalPrice() / 10);
};

const test1 = new Store();
const test2 = new Store(120, 10, 10, 5);

getDiscount(test1);
setBonus(test1);

console.log(test1.buyPizzaSlice());
console.log(test2.buyPizzaSlice());