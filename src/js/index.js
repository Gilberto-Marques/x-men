//fazendo busca por todos os seletores
const personagens = document.querySelectorAll('.personagem');

personagens.forEach(personagem => {
    personagem.addEventListener('mouseenter', () => {
        //para uso em navegador de celular
        if (window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth' });
        }
        removerSelecaoDoPersonagem();
        personagem.classList.add('selecionado');
        
        alterarImagemPersonagemSelecionado(personagem);

        alterarNomePersonagemSelecionado(personagem);

        alterarDescricaoPersonagemSelecionado(personagem);
    })
})
function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    //alterando o texto do nome do personagem selecionado
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    //utilizar crase quando for interpolar texto com imagem
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

