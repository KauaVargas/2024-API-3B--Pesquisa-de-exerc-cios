const url = 'https://raw.githubusercontent.com/KauaVargas/2024-API-3B--Pesquisa-de-exerc-cios/refs/heads/main/top_exercicios_BR'

async function vizualizaInfo(){
    const res = await fetch(url)
    const dados = await res.json()

    const cursos = Object.keys(dados)
    const exercicioMaisVotado = cursos[0]
    const quantidadeDeVoto = Object.values(dados)[0]

    let paragrafo = document.createElement('p')

    paragrafo.classList.add('caixa-grafico__texto')

    paragrafo.innerHTML = ` Nessa pesquisa, buscou-se compreender qual o exercício favorito e mais influente pelos praticantes da musculação. O ${exercicioMaisVotado} foi o exercício mais votado entre todos, com um total de ${quantidadeDeVoto} votos, em uma pesquisa que teve um total de um milhão de participantes.`

    let caixa = document.getElementById('caixa-grafico')
    caixa. appendChild(paragrafo)

}

vizualizaInfo()