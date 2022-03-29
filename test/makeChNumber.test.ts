import { makeChNumber } from '../src/'

describe('转换数字为 大致数字描述', () => {
  it(`makeChNumber(155) -> should return 155`, () => {
    const rand = makeChNumber(155)
    expect(rand).toBe('155')
  })
  it(`makeChNumber(3787) -> should return 3千`, () => {
    const rand = makeChNumber(3787)
    expect(rand).toBe('3千')
  })
  it(`makeChNumber(2889988) -> should return 2百万`, () => {
    const rand = makeChNumber(2889988)
    expect(rand).toBe('289.0万')
  })
})
