import { setTimeout } from 'timers/promises'
import { GameStatus } from '../../../../src/modules/pokemon/interfaces'
import { withSetup } from '../../../utils/with-setup'
import { usePokemonGame } from './../../../../src/modules/pokemon/composables/usePokemmonGame'
import test, { describe } from 'node:test'
import { expect } from 'vitest'

describe('usePkemonGame', () => {
  test('sholu initialize with the correct default values', async () => {
    const [results, app] = withSetup(usePokemonGame)

    expect(results.gameStatus.value).toBe(GameStatus.Playing)
    expect(results.isLoading.value).toBe(true)
    expect(results.pokemonsOptions.value).toEqual([])
    expect(results.randomPokemon.value).toBe(undefined)

    await new Promise((r) => setTimeout(r, 2000))

    await flushPromises()

    expect(results.isLoading.value).toBe(false)
    expect(results.pokemonsOptions.value.length).toEqual(4)
    expect(results.randomPokemon.value).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
    })
  })
})
