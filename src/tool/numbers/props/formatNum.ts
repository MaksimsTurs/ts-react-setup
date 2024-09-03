export default function formatNum(num: number): string {
  if(num > 9) return num.toString()
  return `0${num}`
}