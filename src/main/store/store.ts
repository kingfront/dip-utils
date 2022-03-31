/**
 * 浏览器存储 工具函数
 */

/**
 * 存储localStorage
 * @param name key值
 * @param content value值
 */
export function setLocal(name: string, content: any): void {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  if (window.localStorage) {
    window.localStorage.setItem(name, content)
  }
}

/**
 * 获取存储localStorage
 * @param name key值
 * @return string
 */
export function getLocal(name: string): string | null {
  if (!name) return null
  if (!window.localStorage) return null
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 * @param name key值
 */
export function removeLocal(name: string) {
  if (!name) return
  if (!window.localStorage) return
  window.localStorage.removeItem(name)
}

/**
 * 存储sessionStorage
 * @param name key值
 * @param content value值
 */
export function setSession(name: string, content: any) {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.sessionStorage.setItem(name, content)
}

/**
 * 获取localStorage
 * @param name key值
 * @return string
 */
export function getSession(name: string): string | null {
  if (!name) return null
  return window.sessionStorage.getItem(name)
}

/**
 * 删除localStorage
 * @param name key值
 */
export function removeSession(name: string) {
  if (!name) return
  window.sessionStorage.removeItem(name)
}
