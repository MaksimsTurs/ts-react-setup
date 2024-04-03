import type { BuildOptions } from 'vite'

export default (isDev: boolean): BuildOptions => ({
	minify: isDev ? 'esbuild' : 'terser',
	sourcemap: isDev ? false : true,
	manifest: isDev ? false : true,
	emptyOutDir: true,
	chunkSizeWarningLimit: 200,
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
		output: {
			chunkFileNames: 'assets/js/[name]-[hash].js',
			entryFileNames: 'assets/js/[name]-[hash].js',
			assetFileNames: (assetInfo: any) => {
				let ext: string = assetInfo.name.split('.')[1]!

				if (/webp/i.test(ext)) ext = 'img'

				return `assets/${ext}/[name]-[hash][extname]`
			},
		},
	},
})