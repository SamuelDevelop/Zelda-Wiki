async function carregarPersonagens() {
    try {
        const response = await fetch("data/personagens.json");
        const dados = await response.json();
        
        console.log("Personagens carregados:", dados.personagens);
        return dados.personagens;

    } catch (err) {
        console.error("Erro ao carregar JSON:", err);
    }
}

let personagens = await carregarPersonagens();
console.log(personagens);

