export type TFetcherUtil = {
  base?: string
  get: <T>(URL: string, headers?: TParamHeaders) => Promise<T>
  post: <T>(URL: string, body?: any, headers?: TParamHeaders) => Promise<T>
}

export type THeadersKeys = 
  'Content-Length'   |
  'Content-Type'     |
  'Accept-Encoding'  |
  'Cache-Control'    |
  'Content-Language' |
  'Expires'          |
  'Last-Modified'    |
  'Pragma'           |
  'Authentification'

export type TParamHeaders = Record<THeadersKeys, string>