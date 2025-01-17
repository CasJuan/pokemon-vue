import test, { describe } from 'node:test'
import PokemonOptions from '../../../../src/modules/pokemon/components/PokemonOptions.vue'
import { mount } from '@vue/test-utils'
import { expect } from 'vitest'
import { waitForDebugger } from 'inspector'

const options = [
  { id: 1, name: 'Bulbasure' },
  { id: 2, name: 'Ivysaur' },
  { id: 3, name: 'Venusaur' },
]

describe('<pokemonPicture/>', () => {
  test('shoul render burrons with correct text', () => {
    const wrapper = mount(PokemonOptions, {
      props: { options, blockSelection: false, correctAnswer: 1 },
    })
    const button = wrapper.findAll('button')
    expect(button.length).toBe(options.length)

    button.forEach((button, index) => {
      expect(button.attributes('class')).toBe('capitalize disable:shadow-none disabled:bg-gray-100')
      expect(button.text()).toBe(options[index].name)
    })
  })
  test('shoul emit selectedOption wven when a button is clicked', async () => {
    const wrapper = mount(PokemonOptions, {
      props: { options, blockSelection: false, correctAnswer: 1 },
    })
    const [b1, b2, b3] = wrapper.findAll('button')
    await b1.trigger('click')
    await b2.trigger('click')
    await b3.trigger('click')

    expect(wrapper.emitted().selectedOption).toBeTruthy()
    expect(wrapper.emitted().selectedOption[0]).toEqual([1])
    expect(wrapper.emitted().selectedOption[1]).toEqual([2])
    expect(wrapper.emitted().selectedOption[2]).toEqual([3])
  })
  test('shoul disabled buttons when blockSelection prop is true', () => {
    const wrapper = mount(PokemonOptions, {
      props: { options, blockSelection: false, correctAnswer: 1 },
    })
    const buttons = wrapper.findAll('button')
    buttons.forEach((button) => {
      const atributes = Object.keys(button.attributes())
      expect(atributes).toContain('disabled')
    })
  })
  test('should apply correct styling to buttons based on correct/incorrect', () => {
    const correctAnswer = 2
    const wrapper = mount(PokemonOptions, {
      props: { options, blockSelection: false, correctAnswer },
    })
    const buttons = wrapper.findAll('button')
    buttons.forEach((button, index) => {
      if (options[index].id === correctAnswer) {
        expect(button.classes()).toContain('correct')
      } else {
        expect(button.classes()).toContain('incorrect')
      }
    })
  })
})
