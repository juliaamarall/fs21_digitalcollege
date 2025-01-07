let lista = [];

const frm = document.querySelector('#formCentral');
// evita o envio do formulario 
frm.addEventListener('submit', (event) =>{
    event.preventDefault(); 
    // alert("ola")

    // pegando as informações passadas nos campos de input
    const nome = document.querySelector('#nome').value;
    const preco = document.querySelector('#preco').value;
    const descricao = document.querySelector('#descricao').value;
    const quantidade = document.querySelector('#quantidade').value;


    const produto = {
        nome: nome,
        preco: preco,
        descricao: descricao,
        quantidade: quantidade
    }
    // enviando dados para o array
    lista.push(produto) 

    const produtoLista = JSON.stringify(lista)
    localStorage.setItem('lista', produtoLista)

    alert('PRODUTO ADICIONADO COM SUCESSO! ')

})
