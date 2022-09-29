import Order from "./order";
import Dish from "./dish";
import Drink from "./drink";
import Dessert from "./dessert";
import Modal from "./modal";

export default class Restaurant {
    constructor(dishes, drinks, desserts) {
        this.dishes = this.buildDishes(dishes);
        this.drinks = this.buildDrinks(drinks);
        this.dessert = this.buildDesserts(desserts);
        this.order = new Order();
        this.orderButton = document.querySelector(".fazer-pedido");
    }

    onClickCallback(option) {
        if (option instanceof Dish) this.order.dish = option;
        if (option instanceof Drink) this.order.drink = option;
        if (option instanceof Dessert) this.order.dessert = option;

        if (
            this.order.isReady() &&
            !this.orderButton.classList.contains("ativo")
        )
            this.enableOrderButton();
    }

    enableOrderButton() {
        this.orderButton.classList.add("ativo");
        this.orderButton.disabled = false;
        this.orderButton.innerHTML = "Fazer pedido";

        this.orderButton.addEventListener("click", () =>
            new Modal().open(this.order)
        );
    }

    buildDishes(dishes) {
        return dishes.map(({ name, image, description, price }) => {
            const dishContainer = document.querySelector(".opcoes.prato");
            const dish = new Dish(name, image, description, price);
            dish.draw(dishContainer, this.onClickCallback.bind(this));

            return dish;
        });
    }

    buildDrinks(drinks) {
        return drinks.map(({ name, image, description, price }) => {
            const drinkContainer = document.querySelector(".opcoes.bebida");
            const drink = new Drink(name, image, description, price);
            drink.draw(drinkContainer, this.onClickCallback.bind(this));

            return drink;
        });
    }

    buildDesserts(desserts) {
        return desserts.map(({ name, image, description, price }) => {
            const dessertContainer =
                document.querySelector(".opcoes.sobremesa");
            const dessert = new Dessert(name, image, description, price);
            dessert.draw(dessertContainer, this.onClickCallback.bind(this));

            return dessert;
        });
    }
}
