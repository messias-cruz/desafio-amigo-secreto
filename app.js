//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

console.log(amigos);

function adicionarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nomeDigitado = inputAmigo.value;

  if (nomeDigitado === "") {
    alert("Por favor, digite um nome.");
    return;
  }

  if (amigos.includes(nomeDigitado)) {
    alert("Já existe um amigo com esse nome. Por favor, digite o sobrenome.");
  } else {
    amigos.push(nomeDigitado); // Adiciona o nome à lista
    inputAmigo.value = ""; // Limpa o campo de entrada

    exibirListaAmigos(); // Chama a função para exibir a lista atualizada
  }
}

// Função completa
function exibirListaAmigos() {
  // Obter o elemento da lista
  const listaAmigos = document.getElementById("listaAmigos"); // Ou document.querySelector('#listaAmigos');

  listaAmigos.innerHTML = ""; // Limpar a lista existente

  // Percorrer o array
  for (let i = 0; i < amigos.length; i++) {
    const nomeAmigo = amigos[i];

    // Adicionar elementos à lista
    const itemLista = document.createElement("li"); // Para cada amigo, crie um novo elemento de lista (<li>) usando document.createElement('li').
    itemLista.textContent = nomeAmigo; // Defina o texto do elemento <li> com o nome do amigo usando textContent.
    listaAmigos.appendChild(itemLista); // Adicione o elemento <li> à lista HTML usando appendChild().
  }
}
