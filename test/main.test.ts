import { random, uuid } from '../src/index'

describe('生成数字范围内的随机数', () => {
  it('random(1, 1) -> should return 1', () => {
    const rand = random(1, 1)
    expect(rand).toBe(1)
  })
  it('random(1, 10) -> should return number', () => {
    const rand = random(1, 10)
    expect(rand).toBeNaN
  })
})

describe('生成uuid', () => {
  it('uuid() -> should return length 36', () => {
    const rand = uuid()
    expect(rand).toHaveLength(36)
  })
})
