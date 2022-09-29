import Order from "./order";
import Dish from "./dish";
import Drink from "./drink";
import Dessert from "./dessert";
import Modal from "./modal";

export default class Restaurant {
    constructor(dishes, drinks, desserts) {
        this.dishes = this.buildDishes(dishes);
        this.drinks = this.buildDrinks(drinks);
        this.desserts = this.buildDessert(desserts);
        this.order = new Order();
        this.button = document.querySelector(".fazer-pedido");
    }

    buildDishes(dishes) {
        return dishes.map((object) => {
            const { name, description, image, price } = object;
            const container = document.querySelector(".opcoes.prato");
            const dish = new Dish(name, description, price, image);
            dish.draw(container, this.onClickCallback.bind(this));

            return dish;
        });
    }

    buildDrinks(drinks) {
        console.log(drinks);
    }

    buildDesserts(desserts) {
        console.log(desserts);
    }

    onClickCallback(option) {
        if(option instanceof Dish) this.order.dish = option;
        if(option instanceof Drink) this.order.drink = option;
        if(option instanceof Dessert) this.order.dessert = option;

        if (this.order.isReady() && !this.button.classList.contains("ativo")) {
            this.enableButton();
        }
    }

    enableButton() {
        this.button.classList.add("ativo");
        this.button.disabled = false;
        this.button.innerHTML = `Fazer pedido...`;

        this.button.addEventListener("click", () =>
            new Modal().open(this.order)
        );
    }
}
