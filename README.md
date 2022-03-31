<h1 align="center">前端常用工具函数</h1>

<p align="center">汇总常用工具函数</p>

<p align="center">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/kingfront/dip-utils" />
    <img src="https://img.shields.io/github/languages/top/kingfront/dip-utils?style=flat-square&color=green"  alt="GitHub top language" />
    <img src="https://img.shields.io/badge/dynamic/json?color=green&label=github&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dgithub%26queryKey%3Dkingfront&style=flat-square&logo=github" />
    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/kingfront/dip-utils?color=yellow">
</p>

---

## 简介

前端项目开发中，会经常使用一些工具函数，随着项目数量的增多、工具函数的增多，在每个项目里面都维护一个 util.js 会带来不少的麻烦，所以还是维护一个工具函数包，希望大家也一并 commit!

## 安装使用

### 1. 安装包使用方式

安装

```shell
# npm
npm install dip-utils -S

# yarn
yarn add dip-utils -S
```

ESM 导入使用

```js
import { random } from 'dip-utils'
console.log(random(1, 10))
```

RequireJS 导入使用

```js
const { random } = require('dip-utils')
console.log(random(1, 10))
```

### 2. 网页 script 直接引入使用方式

直接拷贝 dist 下的 dip-utils-umd.js 到项目里面，可直接引用

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <script src="/dist/dip-utils-umd.js"></script>
    <script>
      console.log(dutils.random(1, 10))
    </script>
  </body>
</html>
```

## 函数概览

```js
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
   * @param date Date类型 new Date()
   * @param fmt 格式化类型 yyyy-MM-dd hh:mm:ss
   * @returns 时间字符串 2022-03-29 17:22:30
   */
  export function format(date: Date, fmt: string): string
  /**
   * 转换音视频时长，把秒数转换为：HH:MM:SS格式
   * @param duration 音视频时长：120
   * @returns 时间字符串：02:00
   */
  export function makeDuration(duration: number): string
  /**
   * 转换时间字符串为大致时间描述
   * @param date 日期：2022-03-29 09:08:11
   * @returns 时间字符串：1个月前
   */
  export function makeChTime(date: string): string
  /**
   * 转换数字为 大致数字描述
   * @param value 数字：1001
   * @returns 时间字符串：1千
   */
  export function makeChNumber(value: number): string
  /**
   * 判断是否为数组
   * @param input 最小数字
   * @returns boolean
   */
  export function isArray(input: any): boolean
  /**
   * 判断是否为空
   * @param input 任意值对象
   * @returns boolean
   */
  export function isEmpty(input: any): boolean
  /**
   * 判断是否为数字
   * @param input 任意值对象
   * @returns boolean
   */
  export function isNumber(input: any): boolean
  /**
   * 根据key获取浏览器url参数
   * @param name 参数key
   * @param name window.location.href ： ?title=你好url&test=true
   * @returns string | null 参数值
   */
  export function getUrlVal(name: string, url?: string): string | null
  /**
   * 转换浏览器url参数为json对象
   * @param name 参数key
   * @param name window.location.href ： ?title=你好url&test=true
   * @returns string | null 参数值
   */
  export function parseUrlValToJson(url: string): JSON | null
  /**
   * 存储localStorage
   * @param name key值
   * @param content value值
   */
  export function setLocal(name: string, content: any): void
  /**
   * 获取存储localStorage
   * @param name key值
   * @return string
   */
  export function getLocal(name: string): string | null
  /**
   * 删除localStorage
   * @param name key值
   */
  export function removeLocal(name: string)
  /**
   * 存储sessionStorage
   * @param name key值
   * @param content value值
   */
  export function setSession(name: string, content: any)
  /**
   * 获取localStorage
   * @param name key值
   * @return string
   */
  export function getSession(name: string): string | null
  /**
   * 删除localStorage
   * @param name key值
   */
  export function removeSession(name: string)
```
