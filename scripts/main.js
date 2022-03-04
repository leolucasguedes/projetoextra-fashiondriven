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

function selecionarCamisa(div, modelo) {
  const camisaselecionada = document.querySelector(".modelos .selecionado");
  if (camisaselecionada !== null) {
    camisaselecionada.classList.remove("selecionado");
    liberado -= 1;
  }
  div.classList.add("selecionado");
  liberado += 1;
  console.log(liberado, modelo);
  objeto.model = modelo;

  liberarBotao();
}

function selecionarGola(div, gola) {
  const golaselecionada = document.querySelector(".golas .selecionado");
  if (golaselecionada !== null) {
    golaselecionada.classList.toggle("selecionado");
    liberado -= 1;
  }
  div.classList.add("selecionado");
  liberado += 1;
  console.log(liberado, gola);
  objeto.neck = gola;

  liberarBotao();
}

function selecionarTecido(div, tecido) {
  const tecidoselecionado = document.querySelector(".tecidos .selecionado");
  if (tecidoselecionado !== null) {
    tecidoselecionado.classList.remove("selecionado");
    liberado -= 1;
  }
  div.classList.add("selecionado");
  liberado += 1;
  console.log(liberado, tecido);
  objeto.material = tecido;

  liberarBotao();
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
  }
}

document.querySelector("input").addEventListener("change", (event) => {
  liberado += 1;
  console.log(liberado);
});

function liberarBotao() {
  let botao = document.querySelector("button");
  if (liberado === 4) {
    botao.disabled = false;
    botao.classList.add("liberado");
  } else {
    botao.disabled = true;
  }
}

function fecharPedido() {
  validarImagem();
  alert("Pedido Confirmado!");
  enviarParaServidor();
}

function enviarParaServidor() {
  const promisse = axios.post(
    "https://mock-api.driven.com.br/api/v4/shirts-api/shirts",
    objeto
  );
  promisse.then(alert("Encomenda feita"));
  promisse.catch(alert("Ops, não conseguimos processar sua encomenda"));
}

const promessa = axios.get(
  "https://mock-api.driven.com.br/api/v4/shirts-api/shirts"
);
promessa.then(exibirCamisas);
promessa.catch(tratarErro);

function exibirCamisas(resposta) {
  // console.log(resposta.data);
  const container = document.querySelector(".camisas");

  for (let shirt of resposta.data) {
    console.log(shirt);
    container.innerHTML += `
      <div class"camisa-box">
        <img class="imagemdacamisa" src=${shirt.image} />
        <p class="author"><strong>Criador: </strong>${shirt.owner}</p>
      </div>`;
  }
}

function tratarErro() {}

/*function pedirCamisaPronta(){
  const camisapronta = document.querySelector(".imagemdacamisa")
  camisapronta.addEventListener("click", (event) => {
    (confirm("Quer encomedar uma camisa como essa?!")
)};
}*/
