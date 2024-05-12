import type { UserConfig } from "vite"

export default (aliasPath: string): UserConfig => {
  return {
    resolve: {
      extensions: ['.ts', '.tsx', '.json'],
      alias: { '@': aliasPath },
    }
  }
}