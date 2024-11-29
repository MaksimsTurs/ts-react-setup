export type TObjectsUtil = {
  inObject: <T>(keys: (keyof T)[], object?: T) => boolean
  createFormDataFromJSON: (object: any) => FormData
}