import { expect } from 'vitest'
import { Pokemon } from './../../../../src/modules/pokemon/interfaces/pokemon.interface'
import test, { describe } from 'node:test'

describe('pokemonInterface', () => {
  const pokemon: Pokemon = { id: 1, name: 'bulbasur' }

  test('should have and id property of type number', () => {
    expect(pokemon.id).toEqual(expect.any(Number))
  })
  test('should have a name property of type string', () => {
    expect(pokemon.name).toEqual(expect.any(String))
  })
})
