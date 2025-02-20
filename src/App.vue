<script setup>

import pokedex from "./components/pokedex.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <div class="border-blue">
    <div class="gris">
      <img class="logo-pokemon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png" alt="Logo Pokémon" /> 
      <router-view></router-view>      
    </div>
    
  <Footer></Footer>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.gris {
  background-color: #424242;
  border-radius: 20px;
  border: 5px solid #005cbf; 
  box-shadow: 0 0 0 5px #ffcb05;
}

.logo-pokemon {
    padding-top: 40px;
    width: 400px; 
    height: auto;
    transition: all 0.3s ease;
}

.border-blue {
  border: 9px solid #005cbf;
  border-radius: 20px;
}

.logo-pokemon:hover {
    transform: scale(1.1); 
}

</style>
