(async function(){
    const CORPO = document.querySelector(".main");
    const personagens = await carregarPersonagens();
    if (!personagens || personagens.length === 0) {
        CORPO.innerHTML = "<p>Não há personagens.</p>";
        return;
    }
    CORPO.innerHTML = getHTMLByItem(personagens[1]);
})();
