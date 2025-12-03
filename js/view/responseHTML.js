
function getHTMLByItem(objeto){
    let STRING =  
    `
        <h1>${objeto.nome}</h1>
        <img src="${objeto.imagens[0]}">
        <table class="table">
    `;

    const chaves = Object.keys(objeto.propriedades);
    chaves.forEach(chave => {
        STRING += 
        `
                <tr>
                    <td class="table-key">${getKeyName(chave)}:</td>
                    <td class="table-value">${objeto.propriedades[chave]}</td>
                </tr>
        `;
    });

    STRING += 
    `
        </table>
        <button onclick="loadMain()">Voltar</button>
    `
    ;
    return STRING;
}