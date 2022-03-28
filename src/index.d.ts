declare namespace dipUtils {
  export function slash(p: string): string
  export function random(min: number, max: number): number
  export function getTimestamp(dateStr: string): number
}
declare module 'dip-utils' {
  export = dipUtils
}
