<template>
    <div class="Pokedex input-container">
        <input v-model="pokemonCount" type="number" min="1" />
        <button @click="fetchPokemons">Compteur</button>
        
        <input v-model="generationInput" type="number" min="1" max="6" placeholder="Entrez une génération">
        <button @click="filterByGeneration">Filtrer par génération</button>
        
        <ListeTypesPokemon :pokemons="pokemons" />
        <pokemon v-for="(pokemon, index) in pokemons" :key="index" :pokemon="pokemon"></pokemon>
    </div>
</template>
<script>
import pokemon from './pokemon.vue';
import ListeTypesPokemon from './ListeTypesPokemon.vue';
import axios from 'axios';

export default {
    name: 'Pokedex',
    components: {
        pokemon,
        ListeTypesPokemon
    },
    data() {
        return {
            pokemons: [],
            pokemonCount: 20, // valeur par défaut
            generationInput: '',
            filteredPokemons: [],
        };
    },
    methods: {
        fetchPokemons() {
            axios
                .get(`https://pokebuildapi.fr/api/v1/pokemon/limit/${this.pokemonCount}`)
                .then(response => (this.pokemons = response.data))
                .catch(error => console.log(error));
        },
        filterByGeneration() {
        if (this.generationInput) {
            const url = `https://pokebuildapi.fr/api/v1/pokemon/generation/${this.generationInput}`;
            axios.get(url)
                .then(response => {
                    this.pokemons = response.data.slice(0, this.pokemonCount); 
                })
                .catch(error => console.log(error));
        }
    }, 
    },
    
    mounted() {
        this.fetchPokemons();
        this.filterByGeneration();
    }
    
};
</script>

<style scoped>
.Pokedex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
}

.Pokedex .input-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 400px; 
    margin-bottom: 20px;  
}

.Pokedex input {
    width: 45%;
    transition: all 0.3s ease;
    
}

.Pokedex input:hover {
    box-shadow: 0 0 30px rgba(0,0,0,0.7); 
}

.Pokedex button {
    width: 45%; 
    transition: all 0.3s ease;
    border: 2px solid white;
    
}

.Pokedex button:hover {
    background-color: #3F51B5;
    cursor: pointer;
    box-shadow: 0 0 30px rgba(0,0,0,0.7);
    color : gold;
    border: 2px solid gold;
}


</style>
