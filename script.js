const inputSearch = document.getElementById('search-input');
const btnSearch = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const image = document.getElementById('image');

const fetchPokemon = async (e) => {
    e.preventDefault();
    try {
        const pokemon = inputSearch.value.toLowerCase()
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`);
        const data = await res.json();
        displayPokemon(data);
    } catch (error) {
        console.log(error);
        alert('Pokémon not found');
        clearPokemon();
    }
};

const displayPokemon = (data) => {
    pokemonName.textContent = data.name.toUpperCase();
    pokemonId.textContent = ` #${data.id}`;
    weight.innerHTML = `<p>Weight: ${data.weight}</p>`;
    height.innerHTML = `<p>Height: ${data.height}</p>`;
    image.innerHTML = `<img src="${data.sprites.front_default}" id="sprite"/>`;
    types.innerHTML =  data.types.map((nameType) => `<span class="${nameType.type.name}">${nameType.type.name}</span>`).join(' - ').toUpperCase();
    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;

    inputSearch.value = '';
}

const clearPokemon = ( ) => {
    pokemonName.textContent = '';
    pokemonId.textContent = '';
    weight.innerHTML = '';
    height.innerHTML = '';
    image.innerHTML = '';
    types.innerHTML = '';
    hp.textContent = '';
    attack.textContent = '';
    defense.textContent = '';
    specialAttack.textContent = '';
    specialDefense.textContent = '';
    speed.textContent = '';

    inputSearch.value = '';
}

btnSearch.addEventListener('click', fetchPokemon);

inputSearch.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        fetchPokemon();
    }
});