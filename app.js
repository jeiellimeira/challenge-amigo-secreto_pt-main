
let listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo"); 
    const nome = input.value.trim(); 

    if (nome === "") {
        alert("Digite um nome válido");
        return;
    }

    listaAmigos.push(nome);
    
    atualizarLista();

    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista

    listaAmigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    let sorteio = [...listaAmigos];

    embaralhar(sorteio);

    let resultadoFinal = [];
    for (let i = 0; i < sorteio.length; i++) {
        let amigo1 = sorteio[i];
        let amigo2 = sorteio[(i + 1) % sorteio.length];

        resultadoFinal.push(`${amigo1} → ${amigo2}`);
    }

    exibirResultado(resultadoFinal);
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    resultado.forEach((par) => {
        const item = document.createElement("li");
        item.textContent = par;
        listaResultado.appendChild(item);
    });
}
