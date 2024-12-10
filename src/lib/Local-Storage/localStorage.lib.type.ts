export type LocalStorage = {
  get: <T>(key: string, parseWhenNull?: string) => T
  set: (key: string, value: any) => void
  remove: (key: string) => void
}