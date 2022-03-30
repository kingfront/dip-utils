/**
 * @jest-environment jsdom
 */
import { getUrlVal, parseUrlValToJson } from '../../src/index'

describe('根据key获取浏览器url参数', () => {
  it(`getUrlVal('title', '?title=你好url&test=true') -> should return 你好url`, () => {
    expect(getUrlVal('title', '?title=你好url&test=true')).toBe('你好url')
  })
  it(`getUrlVal('title', window.location.href) -> should return null`, () => {
    expect(getUrlVal('noKey', window.location.href)).toBe(null)
  })
})

describe('转换浏览器url参数为json对象', () => {
  it(`parseUrlValToJson('?title=你好url&test=true') -> should return title`, () => {
    expect(parseUrlValToJson('?title=你好url&test=true')).toHaveProperty('title')
  })
  it(`parseUrlValToJson('') -> should return Object`, () => {
    expect(parseUrlValToJson('')).toBeInstanceOf(Object)
  })
})
