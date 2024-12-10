import type { UserConfig } from "vite"

type ResolveOptions = {
  path: string
}

export default (param: ResolveOptions): UserConfig['resolve'] => {
  return {
    extensions: [".ts", ".tsx"],
    alias: { "@": param.path },
  }
}