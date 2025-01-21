const carrinho = [];

function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = '';
    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        listaCarrinho.appendChild(li);
    });
}

function finalizarCompra() {
    alert('Funcionalidade de finalização de compra ainda não implementada.');
}
