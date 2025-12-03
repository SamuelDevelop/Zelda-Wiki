async function carregarPersonagens() {
    try {
        const response = await fetch("data/personagens.json");
        const dados = await response.json();
        
        return dados.personagens;
    } catch (err) {
       
        return [];
    }
}



