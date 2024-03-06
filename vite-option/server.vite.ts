import type { ServerOptions } from "vite"

export default { open: true, port: 3000, warmup: { clientFiles: ['../src/**/*'] } } as ServerOptions