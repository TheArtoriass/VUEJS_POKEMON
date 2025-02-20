<template>
    <div>
        <div v-if="pokemon">
            <h1 class="pokemon-name">{{ pokemon.name }}</h1>
            <img class="pokemon-image" :src="pokemon.image" alt="Image de Pokémon">
            <div class="types">
                <h2 class="type-title">Types :</h2>
                <div class="type-container" v-for="type in pokemon.apiTypes" :key="type.name">
                    <p>{{ type.name }}</p>
                    <img class="type-image" :src="type.image" :alt="`Image du type ${type.name}`">
                </div>
            </div>

            <div class="stats">
                <h2>Statistiques</h2>
                <div class="stats-item">
                    <p>HP: {{ pokemon.stats.HP }}</p>
                    <progress :value="pokemon.stats.HP" max="250"></progress>
                </div>
                <div class="stats-item">
                    <p>Attaque: {{ pokemon.stats.attack }}</p>
                    <progress :value="pokemon.stats.attack" max="250"></progress>
                </div>
                <div class="stats-item">
                    <p>Défense: {{ pokemon.stats.defense }}</p>
                    <progress :value="pokemon.stats.defense" max="250"></progress>
                </div>
                <div class="stats-item">
                    <p>Attaque spéciale: {{ pokemon.stats.special_attack }}</p>
                    <progress :value="pokemon.stats.special_attack" max="250"></progress>
                </div>
                <div class="stats-item">
                    <p>Défense spéciale: {{ pokemon.stats.special_defense }}</p>
                    <progress :value="pokemon.stats.special_defense" max="250"></progress>
                </div>
                <div class="stats-item">
                    <p>Vitesse: {{ pokemon.stats.speed }}</p>
                    <progress :value="pokemon.stats.speed" max="250"></progress>
                </div>
            </div>

            <div class="resistances">
                <h2>Résistances</h2>
                <div class="resistance-item" v-for="resistance in pokemon.apiResistances" :key="resistance.name">
                    <p >{{ resistance.name }}: {{ resistance.damage_multiplier }} ({{ resistance.damage_relation }})</p>
                </div>
            </div>
            <div>
                <h2>Evolution</h2>
                <div class="evolution-item" v-for="evolution in pokemon.apiEvolutions" :key="evolution.name">
                    <p>{{ evolution.name }}</p>
                </div>
            </div>
        </div>
        <button @click="previousPokemon" class="pokemon-button">Précédent</button>
        <button @click="nextPokemon" class="pokemon-button">Suivant</button>
        <div class="routercss">
            <router-link to="/">Retour à l'accueil</router-link>
        </div>  
    </div>  
</template>

<script>
import axios from 'axios';

export default {
    name: 'DetailsPokemon',
    data() {
        return {
            pokemon: null,
        };
    },
    created() {
        this.fetchPokemonDetails();
    },
    watch: {
        '$route.params.id': {
            immediate: true,
            handler() {
                this.fetchPokemonDetails();
            },
        },
    },
    methods: {
        fetchPokemonDetails() {
           
            axios
                .get(`https://pokebuildapi.fr/api/v1/pokemon/`+ this.$route.params.id)
                .then(response => (this.pokemon = response.data))
                .catch(error => console.log(error));
        },
        previousPokemon() {
            const previousId = Math.max(1,parseInt(this.$route.params.id) - 1);
            this.$router.push({ name: 'DetailsPokemon', params: { id: previousId.toString() } });
        },
        nextPokemon() {
            const nextId = Math.min(898,parseInt(this.$route.params.id) + 1);
            this.$router.push({ name: 'DetailsPokemon', params: { id: nextId.toString() } });
        },
    },
    mounted() {
        this.fetchPokemonDetails();
        
    },
};
</script>

<style scoped>
    .pokemon-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: Arial, sans-serif;
        color: #333;
        margin-top: 2em;
    }

    .pokemon-image {
        width: 200px;
        height: 200px;
       
    }
    .types {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 1em;
        border : 1px solid #ffffff;
        border-radius: 10px;
       
    }

    .type-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.7em;
    }

    .type-image {
        width: 50px;
        height: 50px;
    }

    .stats{
        margin-top: 1em;
        border : 1px solid #ffffff;
        border-radius: 10px;   
    }

    .resistances{
        margin-top: 1em;
        border : 1px solid #ffffff;
        border-radius: 10px;
        padding: 1em;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);   
        padding-bottom: 20px;
    }

    .pokemon-button {
    margin: 20px;
    }

    .routercss {
        padding: 20px;
    }


</style>