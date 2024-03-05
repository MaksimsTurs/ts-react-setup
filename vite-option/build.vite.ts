import { BuildOptions } from 'vite'

const build = (isDev: boolean): BuildOptions => ({
	minify: isDev ? 'esbuild' : 'terser',
	sourcemap: isDev ? false : true,
	manifest: isDev ? false : true,
	emptyOutDir: true,
	chunkSizeWarningLimit: 250,
	reportCompressedSize: false,
	terserOptions: isDev ? undefined : {
		ecma: 2020,
		compress: {
			arguments: true,
			drop_console: true,
			drop_debugger: true,
			expression: true,
		},
	},
	rollupOptions: {
		//@ts-ignore
		output: {
			chunkFileNames: 'assets/js/[name]-[hash].js',
			entryFileNames: 'assets/js/[name]-[hash].js',
			assetFileNames: (assetInfo: { name: string }) => {
				let ext = assetInfo.name.split('.').at(1)

				//@ts-ignore
				if (/webp/i.test(ext)) ext = 'img'

				//@ts-ignore
				return `assets/${ext}/[name]-[hash][extname]`
			},
		},
	},
})

export default build
