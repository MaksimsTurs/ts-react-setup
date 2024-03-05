export default function parseError(error: string) {
  return JSON.parse(error) as { code: number, message: string }
}