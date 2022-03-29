import { format } from '../src/index'

describe('日期格式化', () => {
  it('format(new Date(), "yyyyMMddhhmmss") -> should return 1', () => {
    const str = format(new Date(), 'yyyy-MM-dd hh:mm:ss')
    expect(str).toHaveLength(19)
  })
  it('format(new Date(), "yyyy-MM-dd hh:mm:ss") -> should return 1', () => {
    const str = format(new Date(), 'yyyy-MM-dd hh:mm:ss')
    expect(str).toContain('-')
  })
})
