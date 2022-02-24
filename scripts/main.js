//const nomedousuario = prompt("Insira um nome de usuário");

let liberado = 0;

function selecionarCamisa(div) {
  const camisaselecionada = document.querySelector(".modelos .selecionado");
  if (camisaselecionada !== null) {
    camisaselecionada.classList.remove("selecionado");
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
    liberado -= 1;
  }
  div.classList.add("selecionado");
  liberado += 1;
  console.log(liberado);

  liberarBotao();
}

function validarURL(url) {
  let regexExpression =
    /^(ftp|http|https|chrome|:\/\/|\.|@){2,}(localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\S*:\w*@)*([a-zA-Z]|(\d{1,3}|\.){7}){1,}(\w|\.{2,}|\.[a-zA-Z]{2,3}|\/|\?|&|:\d|@|=|\/|\(.*\)|#|-|%)*$/gmu;
  return regexExpression.test(url);
}

function validarImagem() {
  const inputdaimagem = document.querySelector("input").value;
  if(validarURL(inputdaimagem) = true){
      liberado +=1;
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
}
