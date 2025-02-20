<template>
    <div class="Card" :class="getTypeClass">
        <div class="card-number" :style="{ color: typeColor }">#{{ pokemon.id }}</div> 
        <h2>{{ pokemon.name }}</h2>
        <img :src="pokemon.image" :alt="name" />
        <h2>Generation: {{ pokemon.apiGeneration }}</h2>
        <div class="types">
            <div v-for="(type, index) in pokemon.apiTypes" :key="index">
                <img :src="type.image" :alt="type.name" />
                <h1>{{ type.name }}</h1>                
            </div>
        </div>
        <router-link :to="`/details/${pokemon.id}`">Voir les détails</router-link>
    </div>
</template>

<script>
export default {
    name: 'Pokemon',
    props: ['pokemon'],
    computed: {
        getTypeClass() {
            return this.pokemon.apiTypes[0].name.toLowerCase();
        },
        typeColor() {
            const type = this.pokemon.apiTypes[0].name.toLowerCase();
            const colors = {
                'plante': '#4CAF50',
                'feu': '#F44336',
                'poison': '#9C27B0',
                'vol': '#90CAF9',
                'eau': '#2196F3',
                'insecte': '#8BC34A',
                'normal': '#9E9E9E',
                'électrik': '#FFEB3B',
                'sol': '#795548',
                'roche': '#607D8B',
                'fée': '#F48FB1',
                'combat': '#D84315',
                'glace': '#80D8FF',
                'spectre': '#6200EA',
                'acier': '#B0BEC5',
                'dragon': '#3F51B5',
                'psy': '#FF4081',
                'ténèbres': '#212121',
            };
            return colors[type] || 'black'; // retourne 'black' si le type n'est pas trouvé dans l'objet colors
        }
    },
};
</script>

<style scoped>
.plante {
    background-color: #4CAF50;
}
.feu {
    background-color: #F44336;
}
.poison {
    background-color: #9C27B0;
}
.vol {
    background-color: #90CAF9;
}
.eau {
    background-color: #2196F3;
}
.insecte {
    background-color: #8BC34A;
}
.normal {
    background-color: #9E9E9E;
}

.électrik {
    background-color: #FFEB3B;
}

.sol {
    background-color: #795548;
}

.roche {
    background-color: #607D8B;
}

.fée {
    background-color: #F48FB1;
}

.combat {
    background-color: #D84315;
}

.glace {
    background-color: #80D8FF;
}
.spectre{
    background-color: #6200EA;
}

.acier {
    background-color: #B0BEC5;
}

.dragon{
    background-color: #3F51B5;
}

.psy{
    background-color: #FF4081;
}

.ténèbres{
    background-color: #212121;
}

.types {
    display: flex;
    gap: 10px;
    transition: all 0.3s ease;
}

.types:hover {
    transform: scale(1.1); 
}

.types img {
    width: 50px;
    height: auto;
   
}


.types h1 {
    font-size: 16px;
    font-weight: normal;
    text-align: center;
}

.Card {
    width: 200px;
    border: 5px solid #000;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0,0.25);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;
    max-width: 100%;
    position: relative;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.9);
}
.Card:hover {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.7); 
}

.Card h2 {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
}

.Card img {
    width: 100%;
    max-width: 150px;
    height: auto;
    margin-bottom: 10px;
    transition: all 0.3s ease;
}

.Card img:hover {
    transform: scale(1.1); 
}
.Card h2 {
    transition: all 0.3s ease;
}

.Card h2:hover {
    transform: scale(1.3); 
}

.card-number {
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
    padding: 5px 10px;
    font-weight: bold;
}

</style>