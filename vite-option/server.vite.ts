import type { ServerOptions } from "vite"

export default (srcPath: string): ServerOptions => {
  return {
    open: false, 
    port: 3000, 
    warmup: { 
      clientFiles: [srcPath],
    }
  }
}