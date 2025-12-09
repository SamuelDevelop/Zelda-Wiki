
function getHTMLByItem(objeto){
    let STRING =  
    `
        <h1>${objeto.nome}</h1>
        <img src="${objeto.imagens[0]}" class="main-image">
        <table class="table">
    `;

    const chaves = Object.keys(objeto.propriedades);
    chaves.forEach(chave => {
        if(chave != "descricao"){
            STRING += 
            `
                    <tr>
                        <td class="table-key">${getKeyName(chave)}:</td>
                        <td class="table-value">${objeto.propriedades[chave]}</td>
                    </tr>
            `;
        }
    });

    let imagem = objeto.imagens[0];

    if(objeto.imagens.length >  1){
        imagem = objeto.imagens[1];
    }

    STRING += 
    `
        </table>
        <h2>Sobre:</h2>
        <img src="${imagem}" class="second-image">
        <p>${objeto.propriedades.descricao}</p>
        <button onclick="loadMain()">Voltar</button>
    `
    ;
    return STRING;
}