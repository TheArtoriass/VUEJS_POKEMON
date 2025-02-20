<template>
    <div class="ListeTypesPokemon">
        <div v-for="(info, type) in pokemonTypeCounts" :key="type" class="type-count">
            <img :src="info.image" :alt="type" class="type-image" />
            <span>{{ type }}: {{ info.count }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListeTypesPokemon',
    props: ['pokemons'],
    computed: {
        pokemonTypeCounts() {
            const counts = {};
            for (const pokemon of this.pokemons) {
                for (const typeInfo of pokemon.apiTypes) {
                    const type = typeInfo.name;
                    if (counts[type]) {
                        counts[type].count++;
                    } else {
                        counts[type] = { count: 1, image: typeInfo.image };
                    }
                }
            }
            return counts;
        }
    },
};
</script>

<style scoped>
.type-count {
    display: flex;
    align-items: center;
}

.type-image {
    width: 50px;
    margin-right: 10px;
}

.ListeTypesPokemon {
    order: -1; 
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    padding: 10px;
    transition: all 0.5s ease;
}

.ListeTypesPokemon:hover {
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.9)
}

</style>