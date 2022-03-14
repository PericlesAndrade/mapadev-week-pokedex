const ListaSelecaoPokemons = document.querySelectorAll('.pokemon')
const PokemonCard = document.querySelectorAll ('.cartao-pokemon')

ListaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const CartaoPokemonAberto = document.querySelector('.aberto')
        CartaoPokemonAberto.classList.remove('aberto')

        const IdPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + IdPokemonSelecionado
        const CartaoPokemonParaAbrir = document.getElementById (idDoCartaoPokemonParaAbrir)
        CartaoPokemonParaAbrir.classList.add('aberto') 


        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(IdPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add("ativo")
        

        
    })
})