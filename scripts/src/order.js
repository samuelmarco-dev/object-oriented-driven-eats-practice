export default class Order {
    constructor() {
        this.dish = null;
        this.drink = null;
        this.dessert = null;
    }

    isReady() {
        return this.dish && this.drink && this.dessert;
    }

    totalPrice() {
        const { dish, drink, dessert } = this;
        return dish.price + drink.price + dessert.price;
    }

    sendWhatsApp() {
        const telefoneRestaurante = "553299999999";
        const encodedText = encodeURIComponent(
            `Olá, gostaria de fazer o pedido: \n- Prato: ${
                this.dish.name
            } \n- Bebida: ${this.drink.name} \n- Sobremesa: ${
                this.dessert.name
            } \nTotal: R$ ${this.totalPrice().toFixed(2)}`
        );

        const urlWhatsapp = `https://wa.me/${telefoneRestaurante}?text=${encodedText}`;
        window.open(urlWhatsapp);
    }
}
