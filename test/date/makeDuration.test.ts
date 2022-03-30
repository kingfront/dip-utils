import { makeDuration } from '../../src/index'

describe('转换音视频时长', () => {
  it(`makeDuration(155) -> should return 02:35`, () => {
    const rand = makeDuration(155)
    expect(rand).toBe('02:35')
  })
  it(`makeDuration(3787) -> should return 01:03:07`, () => {
    const rand = makeDuration(3787)
    expect(rand).toBe('01:03:07')
  })
})
