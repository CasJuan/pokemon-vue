import { pokemonListFake } from './../../../data/fake-pokemons'
import { GameStatus } from '../../../../src/modules/pokemon/interfaces'
import { withSetup } from '../../../utils/with-setup'
import { usePokemonGame } from './../../../../src/modules/pokemon/composables/usePokemmonGame'
import test, { describe } from 'node:test'
import { expect } from 'vitest'
import MockAdapter from 'axios-mock-adapter'
import { pokemonApi } from '../../../../src/modules/pokemon/api/pokemonApi'

const mockPokemonApi = new MockAdapter(pokemonApi)

mockPokemonApi.onGet('/?limit=151').reply(200, {
  results: pokemonListFake,
})

describe('usePkemonGame', () => {
  test('sholu initialize with the correct default values', async () => {
    const [results, app] = withSetup(usePokemonGame)

    expect(results.gameStatus.value).toBe(GameStatus.Playing)
    expect(results.isLoading.value).toBe(true)
    expect(results.pokemonsOptions.value).toEqual([])
    expect(results.randomPokemon.value).toBe(undefined)

    await flushPromises()

    expect(results.isLoading.value).toBe(false)
    expect(results.pokemonsOptions.value.length).toEqual(4)
    expect(results.randomPokemon.value).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
    })
  })
})
