/**
 * 判断是否为xxx
 */

/**
 * 判断是否为数组
 * @param input 最小数字
 * @returns boolean
 */
export const isArray = (input: any): boolean => {
  return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]'
}
