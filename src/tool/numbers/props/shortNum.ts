export default function shortNum(num: number): string {
  if(num / 1E4 > 1) return (num / 1E4).toFixed(2) + 'K' 
  if(num / 1E5 > 1) return (num / 1E4).toFixed(2) + 'KK' 
  else return num.toString()
}