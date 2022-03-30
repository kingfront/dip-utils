/**
 * location url相关工具函数
 */

/**
 * 根据key获取浏览器url参数
 * @param name 参数key
 * @param name window.location.href ： ?title=你好url&test=true
 * @returns string | null 参数值
 */
export function getUrlVal(name: string, url?: string): string | null {
  url = !url ? window.location.href : url
  if (url.indexOf('?') === -1) return null
  const search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1)
  if (search === '') return null
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  const r = search.match(reg)
  if (r != null) return decodeURIComponent(r[2])
  return null
}
/**
 * 转换浏览器url参数为json对象
 * @param url window.location.href ： ?title=你好url&test=true
 * @returns JSON | null 参数值
 */
export function parseUrlValToJson(url: string): JSON | null {
  url = !url ? window.location.href : url
  const query = JSON.parse('{}')
  if (url.indexOf('?') === -1) return query
  let search: string | string[] =
    url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1)
  if (search === '') return query
  search = search.split('&')
  for (let i = 0; i < search.length; i++) {
    const pair = search[i].split('=')
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
  }
  return query
}
