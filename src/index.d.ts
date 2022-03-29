/**
 * 声明命名空间名称、模块
 */
declare namespace dipUtils {
  /**
   * 生成数字范围内的随机数
   * @param min 最小数字
   * @param max 最大数字
   * @returns number类型
   */
  export function random(min: number, max: number): number
  /**
   * 时间字符串转换为时间戳
   * @param dateStr 字符串格式为 2017-02-10 18:20:30
   * 注意：此处月、日、时分秒、必须为2位数字，否则报错
   * @returns 时间戳
   */
  export function getTimestamp(dateStr: string): number
  /**
   * 转换音视频时长，把秒数转换为：HH:MM:SS格式
   * @param duration 音视频时长：120
   * @returns 时间字符串：02:00
   */
  export function makeDuration(duration: number): string
}
declare module 'dip-utils' {
  export = dipUtils
}
