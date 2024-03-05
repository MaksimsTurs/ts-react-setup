const fetcher = {
  baseURL: undefined,
  formatURL: function(URL: string) {
    if(this.baseURL) return `${this.baseURL}${URL}`
    return URL
  },
  setBody: function(body?: any) {
    if(typeof body === 'object') return JSON.stringify(body)
    if(body instanceof FormData) return body
    return body
  },
  get: async function<T>(URL: string) {
    const response = await fetch(this.formatURL(URL))

    if(!response.ok) throw new Error(JSON.stringify(response))

    return response as T
  },
  post: async function<T>(URL: string, body?: any, headers?: any) { 
    const response = await fetch(this.formatURL(URL), { method: 'POST', body: this.setBody(body), headers })

    if(!response.ok) throw new Error(JSON.stringify(response))

    return response as T
  }
}