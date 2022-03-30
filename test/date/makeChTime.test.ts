import { makeChTime, format } from '../../src/index'

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
