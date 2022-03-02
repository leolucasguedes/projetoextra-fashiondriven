const nomedousuario = prompt("Insira um nome de usuário");
console.log(nomedousuario);

let liberado = 0;

const objeto = {
  model: "",
  neck: "",
  material: "",
  image: "",
  owner: `${nomedousuario}`,
  author: `${nomedousuario}`,
};

function selecionarCamisa(div) {
  const camisaselecionada = document.querySelector(".modelos .selecionado");
  if (camisaselecionada !== null) {
    camisaselecionada.classList.remove("selecionado");
    objeto.model = camisaselecionada;
    liberado -= 1;
  }
  div.classList.add("selecionado");
  liberado += 1;
  console.log(liberado);

  liberarBotao();
}

function selecionarGola(div) {
  const golaselecionada = document.querySelector(".golas .selecionado");
  if (golaselecionada !== null) {
    golaselecionada.classList.toggle("selecionado");
    objeto.neck = golaselecionada;
    liberado -= 1;
  }
  div.classList.add("selecionado");
  liberado += 1;
  console.log(liberado);

  liberarBotao();
}

function selecionarTecido(div) {
  const tecidoselecionado = document.querySelector(".tecidos .selecionado");
  if (tecidoselecionado !== null) {
    tecidoselecionado.classList.remove("selecionado");
    objeto.material = tecidoselecionado;
    liberado -= 1;
  }
  div.classList.add("selecionado");
  liberado += 1;
  console.log(liberado);

  liberarBotao();
  return tecidoselecionado;
}

function validarURL(url) {
  let regexExpression =
    /^(ftp|http|https|chrome|:\/\/|\.|@){2,}(localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\S*:\w*@)*([a-zA-Z]|(\d{1,3}|\.){7}){1,}(\w|\.{2,}|\.[a-zA-Z]{2,3}|\/|\?|&|:\d|@|=|\/|\(.*\)|#|-|%)*$/gmu;
  return regexExpression.test(url);
}

function validarImagem() {
  const inputdaimagem = document.querySelector("input").value;
  if (validarURL(inputdaimagem) === true) {
    objeto.image = inputdaimagem;
    liberado += 1;
  }
}

function liberarBotao() {
  let botao = document.querySelector("button");
  if (liberado === 3) {
    botao.disabled = false;
    botao.classList.add("liberado");
  } else {
    botao.disabled = true;
  }
}

function fecharPedido() {
  alert("Pedido Confirmado!");
  enviarParaServidor();
}

function enviarParaServidor() {
  const promisse = axios.post(
    "https://mock-api.driven.com.br/api/v4/shirts-api/shirts",
    objeto
  );
  promisse.catch(alert("Ops, não conseguimos processar sua encomenda"));
}

const promessa = axios.get(
  "https://mock-api.driven.com.br/api/v4/shirts-api/shirts"
);
promessa.then(exibirCamisas);
promessa.catch(tratarErro);

function exibirCamisas(resposta) {
  console.log(resposta.data);
  let elementoImagem = document.querySelector(".imagem-da-camisa");
  let elementoAuthor = document.querySelector(".author");

  elementoImagem.src = resposta.data.image;
  elementoAuthor.innerHTML = resposta.data.author;
}

function tratarErro() {}
