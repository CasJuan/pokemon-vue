import { describe } from 'node:test'
import { pokemonApi } from '../../../../src/modules/pokemon/api/pokemonApi'
import { expect } from 'vitest'

describe('pokemonApi', () => {
  test('shoul be configured as expected', () => {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

    expect(pokemonApi.defaults.baseURL).toBe(baseUrl)
  })
})
