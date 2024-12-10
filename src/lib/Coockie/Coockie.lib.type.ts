export type Coockie = {
  getOne: (key: string) => string
  setOne: (key: string, value: any, options?: CoockieOptions) => void
}

export type CoockieOptions = {
  expiredAt?: number
}