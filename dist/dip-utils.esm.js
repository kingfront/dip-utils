/**
 * 常用工具函数
 * whao 2022-03-28
 */
/**
 *
 * @param p
 * @returns
 */
var slash = function (p) {
  return p.replace(/\\/g, '/')
}
/**
 *
 * @param p
 * @returns
 */
var random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 常用日期工具函数
 * whao 2022-03-28
 */
/**
 * @param dateStr 字符串格式为 2017-02-10 18:20:30
 * 注意：此处月、日、时分秒、必须为2位数字，否则报错
 * @returns 时间戳
 */
var getTimestamp = function (dateStr) {
  return Date.parse(new Date(dateStr).toString())
}

export { getTimestamp, random, slash }
