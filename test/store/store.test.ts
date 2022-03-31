/**
 * @jest-environment jsdom
 */
import {
  setLocal,
  getLocal,
  removeLocal,
  setSession,
  getSession,
  removeSession
} from '../../src/index'

describe('操作localStorage', () => {
  it(`setLocal('local_name', 'hello') -> should return void`, () => {
    setLocal('local_name', 'hello')
  })
  it(`getLocal('local_name') -> should return hello`, () => {
    expect(getLocal('local_name')).toBe('hello')
  })
  it(`removeLocal('local_name') -> should return void`, () => {
    removeLocal('local_name')
    expect(getLocal('local_name')).toBe(null)
  })
})

describe('操作sessionStorage', () => {
  it(`setSession('session_name', 'hello') -> should return void`, () => {
    setSession('session_name', 'hello')
  })
  it(`getSession('session_name') -> should return hello`, () => {
    expect(getSession('session_name')).toBe('hello')
  })
  it(`removeSession('session_name') -> should return void`, () => {
    removeSession('session_name')
    expect(getSession('session_name')).toBe(null)
  })
})
