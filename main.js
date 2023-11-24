const form = document.getElementById('form-contatos');
const imgVerificado = '<img src="./imagens/verificado.png" alt="Contato verificado"/>';
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContatos = document.getElementById('nome-contatos');
    const inputNumeroContatos = document.getElementById('numero-contatos');

    let linha = '<tr>';
    linha += `<td>${inputNomeContatos.value}</td>`;
    linha += `<td>${inputNumeroContatos.value}</td>`;
    linha += `<td>${inputNumeroContatos.value >= 1 ? imgVerificado : imgVerificado}</td>`;


    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContatos.value = '';
    inputNumeroContatos.value = '';

});