const url = 'https://raw.githubusercontent.com/KauaVargas/2024-API-3B--Pesquisa-de-exerc-cios/refs/heads/main/top_exercicios_BR'

async function vizualizaInfo(){
    const res = await fetch(url)
    const dados = await res.json()

    const cursos = Object.keys(dados)
    const cursoMaisVotado = cursos[0]
    const quantidadeDeVoto = Object.values(dados)[0]

    console.log(cursoMaisVotado)
    console.log(quantidadeDeVoto)
}

vizualizaInfo()