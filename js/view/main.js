const CORPO = document.querySelector(".main");

function loadMain(){
    CORPO.innerHTML = 
    `
        <img class="imagem-central" src="images/link_gifs/link_yes.gif">
        <h2>Como podemos ajuda-lo hoje?</h2>
        <div class="campo-pesquisa">
            <input id="campo-pesquisa" type="text" placeholder="Pesquisar...">
            <div class="respostas" id="respostas"></div>
        </div>
        
    `;

    sugerirPesquisa();
}

loadMain();

function toogleMainImage(link){
    const IMAGEM = document.querySelector(".imagem-central");
    if(IMAGEM != null){
        IMAGEM.src = link;
    }
}
