/**
 * 基本常用工具函数
 * whao 2022-03-28
 */

/**
 * 生成数字范围内的随机数
 * @param min 最小数字
 * @param max 最大数字
 * @returns number类型
 */
export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
