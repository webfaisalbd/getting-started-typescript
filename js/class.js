"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new Car('Toyota 200x', 4500000);
const totalPrice = toyota.getTotalPrice(25);
console.log(totalPrice);
