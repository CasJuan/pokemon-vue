import test, { describe } from 'node:test'
import { mount } from '@vue/test-utils'
import PokemonPicture from '../../../../src/modules/pokemon/components/PokemonPicture.vue'
import { expect } from 'vitest'

describe('<PokemonPicture/>', () => {
  test('shoul rende the hidden image when showPokemon props is fals', () => {
    const pokemonId = 25
    const wrapper = mount(PokemonPicture, {
      props: { pokemonId, showPokemon: false },
    })
    const imageSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
    const image = wrapper.find('img')
    const atributes = image.attributes()
    expect(atributes).toEqual(
      expect.objectContaining({
        class: 'brightness-0 h-[200px]',
        src: imageSource,
      }),
    )
    /* expect(image.attributes('src')).toBe(imageSource) */
  })
  test('shoul rende the hidden image when showPokemon props is fals', () => {
    const pokemonId = 25
    const wrapper = mount(PokemonPicture, {
      props: { pokemonId, showPokemon: true },
    })
    const imageSource = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
    const image = wrapper.find('img')
    const atributes = image.attributes()

    expect(atributes).toEqual(
      expect.objectContaining({
        class: 'fade-in h-[200px]',
        src: imageSource,
        alt: 'pokemon image',
      }),
    )
  })
})
