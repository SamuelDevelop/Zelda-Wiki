const keys_names = {
    genero: "Gênero",
    associacao: "Associação",
    raça: "Raça",
    versoes: "Versões",
    aparicao: "Primeira Aparição",
    descricao: "Descrição",
    alienacao: "Alienação",
}

function getKeyName(chave){
    return keys_names[chave];
}