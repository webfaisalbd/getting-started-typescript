class Car {
    model:string;
    price:number;
    constructor(model:string,price:number){
        this.model=model
        this.price=price
    }
    getTotalPrice(tax:number):number{
        const taxAmount=this.price*tax/100;
        const total=this.price+taxAmount
        return total;
    }

}

const toyota= new Car('Toyota 200x',4500000)
const totalPrice:number=toyota.getTotalPrice(25);
console.log(totalPrice);