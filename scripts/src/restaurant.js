import Order from "./order";

export default class Restaurant {
    constructor(dishes, drinks, dessert) {
        this.dishes = this.buildDishes(dishes);
        this.drinks = this.buildDrinks(drinks);
        this.dessert = this.buildDessert(dessert);
        this.order = new Order();
        this.button = document.querySelector(".footer .fazer-pedido");
    }

    buildDishes() {
        //TODO:
    }

    buildDrinks() {
        //TODO:
    }

    buildDessert() {
        //TODO:
    }
}
