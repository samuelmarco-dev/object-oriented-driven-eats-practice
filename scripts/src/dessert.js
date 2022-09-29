export default class Dessert {
    constructor(description, image, name, price) {
        this.description = description;
        this.image = image;
        this.name = name;
        this.price = price;
        this.element = null;
    }

    draw(container, callback) {
        const div = document.createElement("div");
        div.classList.add("opcao");
        div,
            addEventListener("click", () => {
                this.select(callback);
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
        container.appendChild(div);
    }

    select(callback) {
        const element = document.querySelector(".sobremesa .selecionado");
        if (element) element.classList.remove("selecionado");
        this.element.classList.add("selecionado");

        callback(this);
    }
}
