export default class Dish {
    constructor(name, image, description, price) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
        this.element = null;
        this.class = "prato";
    }

    draw(parentElement, callback) {
        const div = document.createElement("div");
        div.classList.add("opcao");
        div.addEventListener("click", () => {
            this.selectOption(callback);
        });

        div.innerHTML = `
        <img src="${this.image}" />
        <div class="titulo">${this.name}</div>
        <div class="descricao">${this.description}</div>
        <div class="fundo">
            <div class="preco">R$ ${this.price.toFixed(2)}</div>
            <div class="check">
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        </div>
      `;

        this.element = div;
        parentElement.appendChild(div);
    }

    selectOption(callback) {
        // remove from all
        const before = document.querySelector(`.${this.class} .selecionado`);
        if (before) before.classList.remove("selecionado");
        this.element.classList.add("selecionado");

        callback(this);
    }
}
