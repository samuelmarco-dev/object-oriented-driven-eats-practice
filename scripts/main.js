import { dishes, drinks, desserts } from "./src/data.js";

let pratoSelecionado = null;
let bebidaSelecionada = null;
let sobremesaSelecionada = null;

const btnConfirmar = document.querySelector(".confirmar");
const btnCancelar = document.querySelector(".cancelar");
const btnPedir = document.querySelector(".fazer-pedido");

function selecionarPrato(elemento, { nome, preco }) {
  const selecionado = document.querySelector(".prato .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }
  elemento.classList.add("selecionado");

  pratoSelecionado = { nome, preco };
  verificarPedido();
}

function selecionarBebida(elemento, { nome, preco }) {
  const selecionado = document.querySelector(".bebida .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }
  elemento.classList.add("selecionado");

  bebidaSelecionada = { nome, preco };
  verificarPedido();
}

function selecionarSobremesa(elemento, { nome, preco }) {
  const selecionado = document.querySelector(".sobremesa .selecionado");
  if (selecionado !== null) {
    selecionado.classList.remove("selecionado");
  }
  elemento.classList.add("selecionado");

  sobremesaSelecionada = { nome, preco };
  verificarPedido();
}

function getPrecoTotal() {
  return (
    pratoSelecionado.preco +
    bebidaSelecionada.preco +
    sobremesaSelecionada.preco
  );
}

function confirmarPedido() {
  const modal = document.querySelector(".overlay");
  modal.classList.remove("escondido");

  document.querySelector(".confirmar-pedido .prato .nome").innerHTML =
    pratoSelecionado.nome;
  document.querySelector(".confirmar-pedido .prato .preco").innerHTML =
    pratoSelecionado.preco.toFixed(2);

  document.querySelector(".confirmar-pedido .bebida .nome").innerHTML =
    bebidaSelecionada.nome;
  document.querySelector(".confirmar-pedido .bebida .preco").innerHTML =
    bebidaSelecionada.preco.toFixed(2);

  document.querySelector(".confirmar-pedido .sobremesa .nome").innerHTML =
    sobremesaSelecionada.nome;
  document.querySelector(".confirmar-pedido .sobremesa .preco").innerHTML =
    sobremesaSelecionada.preco.toFixed(2);

  document.querySelector(".confirmar-pedido .total .preco").innerHTML =
    getPrecoTotal().toFixed(2);
}

function cancelarPedido() {
  const modal = document.querySelector(".overlay");
  modal.classList.add("escondido");
}

function enviarZap() {
  const telefoneRestaurante = 553299999999;
  const encodedText = encodeURIComponent(
    `Olá, gostaria de fazer o pedido: \n- Prato: ${
      pratoSelecionado.nome
    } \n- Bebida: ${bebidaSelecionada.nome} \n- Sobremesa: ${
      sobremesaSelecionada.nome
    } \nTotal: R$ ${getPrecoTotal().toFixed(2)}`
  );

  const urlWhatsapp = `https://wa.me/${telefoneRestaurante}?text=${encodedText}`;
  window.open(urlWhatsapp);
}

function verificarPedido() {
  if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
    btnPedir.classList.add("ativo");
    btnPedir.disabled = false;
    btnPedir.innerHTML = "Fazer pedido";
  }
}

function getPratoView(prato) {
  const view = document.createElement("div");
  view.classList.add("opcao");
  view.addEventListener("click", () => {
    selecionarPrato(view, prato.nome, prato.preco);
  });
  view.innerHTML = `
        <img src="${prato.imagem}" />
        <div class="titulo">${prato.nome}</div>
        <div class="descricao">${prato.descricao}</div>
        <div class="fundo">
            <div class="preco">R$ ${prato.preco.toFixed(2)}</div>
            <div class="check">
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        </div>
    `;

  return view;
}

function getBebidaView(bebida) {
  const view = document.createElement("div");
  view.classList.add("opcao");
  view.addEventListener("click", () => {
    selecionarBebida(view, bebida.nome, bebida.preco);
  });
  view.innerHTML = `
        <img src="${bebida.imagem}" />
        <div class="titulo">${bebida.nome}</div>
        <div class="descricao">${bebida.descricao}</div>
        <div class="fundo">
            <div class="preco">R$ ${bebida.preco.toFixed(2)}</div>
            <div class="check">
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        </div>
    `;

  return view;
}

function getSobremesaView(sobremesa) {
  const view = document.createElement("div");
  view.classList.add("opcao");
  view.addEventListener("click", () => {
    selecionarSobremesa(view, sobremesa.nome, sobremesa.preco);
  });
  view.innerHTML = `
        <img src="${sobremesa.imagem}" />
        <div class="titulo">${sobremesa.nome}</div>
        <div class="descricao">${sobremesa.descricao}</div>
        <div class="fundo">
            <div class="preco">R$ ${sobremesa.preco.toFixed(2)}</div>
            <div class="check">
                <ion-icon name="checkmark-circle"></ion-icon>
            </div>
        </div>
    `;

  return view;
}

const pratosContainer = document.querySelector(".opcoes.prato");
dishes.forEach((prato) => pratosContainer.appendChild(getPratoView(prato)));
const bebidasContainer = document.querySelector(".opcoes.bebida");
drinks.forEach((bebida) =>
  bebidasContainer.appendChild(getBebidaView(bebida))
);
const sobremesasContainer = document.querySelector(".opcoes.sobremesa");
desserts.forEach((sobremesa) =>
  sobremesasContainer.appendChild(getSobremesaView(sobremesa))
);

btnConfirmar.addEventListener("click", () => {
  enviarZap();
});

btnCancelar.addEventListener("click", () => {
  cancelarPedido();
});

btnPedir.addEventListener("click", () => {
  confirmarPedido();
});
