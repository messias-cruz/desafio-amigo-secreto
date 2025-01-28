//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = ['José','Maria','João','Bruna','Messias','Laura','Grimaldo','Lídia','Wellington','Elza','Sidney','Almerinda','Willians','Taís','Miguel','Juliana','Gilberto','Amanda','Douglas','Camila','Enzo','Isabela','Matheus','Luana','Guilherme','Mariana','Rafael','Beatriz','Bruno','Larissa'];
console.log(amigos);

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeDigitado = inputAmigo.value;

    // Verifica se o nome já existe na lista de amigos
    if (amigos.includes(nomeDigitado)) {
        alert('Já existe um amigo com esse nome. Por favor, digite o nome com sobrenome.');
    } else {
        amigos.push(nomeDigitado);
        console.log(amigos);
    }
}

