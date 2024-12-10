import type { LocalStorage } from "./localStorage.lib.type"

const LocalStorage: LocalStorage = {
  get: <T>(key: string, parseWhenNull?: string) => {
    return JSON.parse(localStorage.getItem(key) || parseWhenNull || 'null') as T
  },
  set: (key: string, value: any) => {
    if(typeof value === 'string') {
      localStorage.setItem(key, value)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  },
  remove: (key: string) => {
    localStorage.removeItem(key)
  }
}

export default LocalStorage