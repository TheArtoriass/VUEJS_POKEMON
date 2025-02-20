
import { createRouter, createWebHistory } from 'vue-router'
import Pokedex from './components/pokedex.vue'
import Pokemon from './components/pokemon.vue'
import DetailsPokemon from './components/DetailsPokemon.vue'

const routes = [
  { path: '/', component: Pokedex, name: 'Pokedex'},
  { path: '/pokemon/:id', component: Pokemon, name: 'Pokemon' },
  { path: '/details/:id', component: DetailsPokemon, name: 'DetailsPokemon'  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router