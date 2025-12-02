(async function(){
    const personagens = await carregarPersonagens();
    const INPUT = document.getElementById("campo-pesquisa");
    const RESPOSTAS = document.getElementById("respostas");

    INPUT.addEventListener("input", ()=>{
        const termo = INPUT.value.toLowerCase();

        if(termo !== ""){
            let encontrados = [];

            personagens.forEach(p => {

                if(p.nome.toLowerCase().includes(termo)){
                    encontrados.push(`<div class="respostas-resposta">${p.nome}</div>`);
                }

                if(Array.isArray(p.tambem_conhecido)){

                    p.tambem_conhecido.forEach(apelido => {

                        if(apelido.toLowerCase().includes(termo)){
                            encontrados.push(`<div class="respostas-resposta">${apelido}</div>`);
                        }
                        
                    });

                }

            });

            if(encontrados.length > 0){
                RESPOSTAS.innerHTML = encontrados.join("");
                RESPOSTAS.style.display = "block";
            } else {
                RESPOSTAS.innerHTML = `<div class="respostas-resposta">Nenhum resultado encontrado.</div>`;
                RESPOSTAS.style.display = "block";
            }

        } else {
            RESPOSTAS.style.display = "none";
            RESPOSTAS.innerHTML = "";
        }
    });
})();



