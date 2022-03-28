/**
 * 常用日期工具函数
 * whao 2022-03-28
 */

/**
 * @param dateStr 字符串格式为 2017-02-10 18:20:30
 * 注意：此处月、日、时分秒、必须为2位数字，否则报错
 * @returns 时间戳
 */
export const getTimestamp = (dateStr: string): number => {
  return Date.parse(new Date(dateStr).toString())
}
