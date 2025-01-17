import { GameStatus } from './../../../../src/modules/pokemon/interfaces/game-status.enum'
import test, { describe } from 'node:test'
import { expect } from 'vitest'

describe('gameStatus enum', () => {
  test('should have a value of playin', () => {
    expect(GameStatus.Playing).toBe('playing')
  })
  test('should have a value of playin', () => {
    expect(GameStatus.Won).toBe('won')
  })
  test('should have a value of playin', () => {
    expect(GameStatus.Lost).toBe('lost')
  })
})
