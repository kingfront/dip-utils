import { random } from '../src/index'

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
