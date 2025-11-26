const CORPO = document.querySelector(".main");

CORPO.innerHTML = 
`
    <img class="imagem-central" src="images/link_gifs/link_yes.gif">
    <h2>Como podemos ajuda-lo hoje?</h2>
    <div class="campo-pesquisa">
        <input type="text" placeholder="Pesquisar...">
        <button>Procurar</button>
    </div>
    
`;

function toogleMainImage(link){
    const IMAGEM = document.querySelector(".imagem-central");
    IMAGEM.src = link;
}
