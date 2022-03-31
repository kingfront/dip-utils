/**
 * 判断xx相关工具函数
 */

/**
 * 判断是否为数组
 * @param input 任意值对象
 * @returns boolean
 */
export function isArray(input: any): boolean {
  return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]'
}

/**
 * 判断是否为空
 * @param input 任意值对象
 * @returns boolean
 */
export function isEmpty(input: any): boolean {
  return typeof input === 'undefined' || input === null || input === ''
}

/**
 * 判断是否为数字
 * @param input 任意值对象
 * @returns boolean
 */
export function isNumber(input: any): boolean {
  return input instanceof Number || Object.prototype.toString.call(input) === '[object Number]'
}
