export default class Order {
    constructor() {
        this.dish = null;
        this.drink = null;
        this.dessert = null;
    }

    isReady() {
        return this.dish && this.drink && this.dessert;
    }

    getTotalPrice() {
        return this.dish.price + this.drink.price + this.dessert.price;
    }

    sendWhatsApp() {
        const telefoneRestaurante = "553299999999";
        const encodedText = encodeURIComponent(
            `Olá, gostaria de fazer o pedido: \n- Prato: ${
                this.dish.name
            } \n- Bebida: ${this.drink.name} \n- Sobremesa: ${
                this.dessert.name
            } \nTotal: R$ ${this.getTotalPrice().toFixed(2)}`
        );

        const urlWhatsapp = `https://wa.me/${telefoneRestaurante}?text=${encodedText}`;
        window.open(urlWhatsapp);
    }
}
