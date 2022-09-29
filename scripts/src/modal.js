export default class Modal {
    constructor() {
        this.element = null;
    }

    open(order) {
        const modal = document.createElement("div");
        const { dish, drink, dessert } = order;
        modal.innerHTML = `
        <div class="overlay">
          <div class="confirmar-pedido">
            <div class="titulo">Confirme seu pedido</div>
            <ul>
              <li class="prato">
                <div class="nome">${dish.name}</div>
                <div class="preco">${dish.price}</div>
              </li>
              <li class="bebida">
                <div class="nome">${drink.name}</div>
                <div class="preco">${drink.price}</div>
              </li>
              <li class="sobremesa">
                <div class="nome">${dessert.name}</div>
                <div class="preco">${dessert.price}</div>
              </li>
              <li class="total">
                <div>Total</div>
                <div class="preco">R$ ${order.getTotalPrice().toFixed(2)}</div>
              </li>
            </ul>
            <button class="confirmar">Tudo certo, pode pedir!</button>
            <button class="cancelar">Cancelar</button>
          </div>
        </div>
        `;

        this.element = modal;
        document.body.append(modal);
        this.setupButtons(order);
    }

    setupButtons(order) {
        document.querySelector(".confirmar").addEventListener("click", () => {
            order.sendWhatsApp();
        });
        document
            .querySelector(".cancelar")
            .addEventListener("click", () => this.element.remove());
    }
}
