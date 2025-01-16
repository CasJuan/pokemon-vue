<template>
  <section v-if="isLoading" class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando Pokemons</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="mt-5">Quien este Pokemon</h1>
    <h3>{{ randomPokemon }}</h3>
    <!-- Pokemon Picture -->
    <PokemonPicture />
    <!-- Pokemon Options -->
    <PokemonOptions />
  </section>
</template>

<script setup lang="ts">
import PokemonOptions from '../components/PokemonOptions.vue'
import PokemonPicture from '../components/PokemonPicture.vue'
import { usePokemonGame } from '../composables/usePokemmonGame'

const { randomPokemon, isLoading } = usePokemonGame()
</script>
