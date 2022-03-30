import { format, makeChNumber, makeChTime, makeDuration } from '../../src/index'

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

describe('转换时间字符串为大致时间描述', () => {
  const date1 = new Date()
  date1.setMonth(date1.getMonth() - 2)
  const time1 = format(date1, 'yyyy-MM-dd hh:mm:ss')
  it(`makeChTime("${time1}") -> should return 2个月前`, () => {
    const rand = makeChTime(time1)
    expect(rand).toBe('2个月前')
  })

  const date2 = new Date()
  date2.getMonth()
  const time2 = format(date2, 'yyyy-MM-dd hh:mm:ss')
  it(`makeChTime("${time2}") -> should return 刚刚`, () => {
    const rand = makeChTime(time2)
    expect(rand).toBe('刚刚')
  })
})

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
