const fetcher = {
  baseURL: undefined,
  formatURL: function(URL: string) {
    if(this.baseURL) return `${this.baseURL}${URL}`
    
    return URL
  },
  formatInit: function(body?: any, headers?: any) {
    let init = { body: body || {}, headers: headers || {} }

    if(!('Content-Type' in headers)) init.headers = {...init.headers, 'Content-Type': 'application/json' }
    if(typeof body === 'object') init.body = JSON.stringify(body)

    return init
  },
  get: async function<T>(URL: string) {
    const response = await fetch(this.formatURL(URL))
    const data = await response.json()

    if(!response.ok) throw new Error(JSON.stringify(data))

    return await response.json() as T
  },
  post: async function<T>(URL: string, body?: any, headers?: any) { 
    const init = this.formatInit(body, headers)
    const response = await fetch(this.formatURL(URL), { method: 'POST', body: init.body, headers: init.headers })
    const data = await response.json()

    if(!response.ok) throw new Error(JSON.stringify(data))
    
    return await response.json() as T
  }
}