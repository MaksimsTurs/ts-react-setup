import type { UserConfig } from 'vite'

export default (isDev: boolean, outDir: string, input: string): UserConfig => {
	return {
		build: {
			minify: isDev ? undefined : 'terser',
			sourcemap: isDev ? false : 'inline',
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
			outDir,
			rollupOptions: {
				input,
				output: {
					chunkFileNames: 'assets/js/[name].js',
					entryFileNames: 'assets/js/[name].js',
					assetFileNames: (assetInfo: any) => {
						let ext: string = assetInfo.name.split('.')[1]!

						if (/jpeg|jpg|png|webp/i.test(ext)) ext = 'img'
		
						return `assets/${ext}/[name][extname]`
					},
				},
			},
		}
	}
}