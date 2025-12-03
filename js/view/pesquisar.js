async function getPersonagemById(id){
    const personagens = await carregarPersonagens();
    return personagens.find(p => p.id === id) || null;
}

async function mostrarPersonagem(id){
    const personagem = await getPersonagemById(id);
    const CORPO = document.querySelector(".main");

    CORPO.innerHTML = getHTMLByItem(personagem);
}

async function sugerirPesquisa(){
    const personagens = await carregarPersonagens();
    const INPUT = document.getElementById("campo-pesquisa");
    const RESPOSTAS = document.getElementById("respostas");

    INPUT.replaceWith(INPUT.cloneNode(true));

    const NOVO_INPUT = document.getElementById("campo-pesquisa");

    NOVO_INPUT.addEventListener("input", () => {
        const termo = NOVO_INPUT.value.toLowerCase();
        let encontrados = [];

        if(termo !== ""){
            personagens.forEach(p => {
                if(p.nome.toLowerCase().startsWith(termo)){
                    encontrados.push(`<div onclick="mostrarPersonagem('${p.id}')" class="respostas-resposta">${p.nome}</div>`);
                }

                if(Array.isArray(p.tambem_conhecido)){
                    p.tambem_conhecido.forEach(apelido => {
                        if(apelido.toLowerCase().startsWith(termo)){
                            encontrados.push(`<div onclick="mostrarPersonagem('${p.id}')" class="respostas-resposta">${apelido}</div>`);
                        }
                    });
                }
            });

            RESPOSTAS.innerHTML = encontrados.length > 0 ?
                encontrados.join("") :
                `<div class="respostas-resposta">Nenhum resultado encontrado.</div>`;

            RESPOSTAS.style.display = "block";
        } else {
            RESPOSTAS.style.display = "none";
            RESPOSTAS.innerHTML = "";
        }
    });
}

sugerirPesquisa();


