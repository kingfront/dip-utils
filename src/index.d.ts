declare namespace dipUtils {
  export function random(min: number, max: number): number
  export function getTimestamp(dateStr: string): number
}
declare module 'dip-utils' {
  export = dipUtils
}
