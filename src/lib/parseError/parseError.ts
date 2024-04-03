type ServerError = { code: number, message: string }

export default function parseError(error?: string): ServerError | undefined {
  if(!error) return undefined
  if(error.search('Error:')) return JSON.parse(error.replace('Error:', '').trim()) as ServerError
  return JSON.parse(error) as ServerError
}