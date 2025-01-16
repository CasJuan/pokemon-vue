<template>
  <section
    v-if="isLoading || randomPokemon.id === null"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokemons</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-5">Quien este Pokemon</h1>
    <div class="h-20">
      <button
        v-if="gameStatus != GameStatus.Playing"
        class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-800 transition-all"
        @click="getNextRound(4)"
      >
        Jugar de Nuevo
      </button>
    </div>
    <!-- Pokemon Picture -->
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus !== GameStatus.Playing"
    />
    <!-- Pokemon Options -->
    <PokemonOptions
      :options="options"
      @selected-option="checkAnswer"
      :block-selection="gameStatus !== GameStatus.Playing"
      :correct-answer="randomPokemon.id"
    />
  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'
import { usePokemonGame } from '../composables/usePokemmonGame'
import { GameStatus } from '../interfaces'

const {
  randomPokemon,
  isLoading,
  gameStatus,
  pokemonsOptions: options,
  checkAnswer,
  getNextRound,
} = usePokemonGame()
</script>
